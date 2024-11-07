from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import logging
import requests
import base64
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.DEBUG, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": ["http://192.168.1.236:3000", "https://clikbate.com"]}}, supports_credentials=True)


# Hugging Face API configuration
hf_api_url = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev"  # Updated to FLUX.1-dev
hf_token = os.getenv("HUGGINGFACE_TOKEN")

# Check if the token is loaded
if not hf_token:
    logger.error("Hugging Face API token is missing. Please set the HUGGINGFACE_TOKEN environment variable.")
    raise Exception("Hugging Face API token is missing.")

headers = {
    "Authorization": f"Bearer {hf_token}",
}

@app.route('/generate', methods=['POST'])
def generate_image():
    try:
        data = request.json
        prompt = data.get('prompt')
        height = data.get('height', 1024)  # Default to 1024 if not provided
        width = data.get('width', 1024)    # Default to 1024 if not provided
        steps = data.get('steps', 50)      # FLUX.1-dev default steps for better quality
        guidance_scale = data.get('guidance_scale', 3.5)  # Set guidance scale to recommended default

        logger.info(f"Received request with prompt: {prompt}, height: {height}, width: {width}, steps: {steps}, guidance_scale: {guidance_scale}")
        
        # Prepare the payload for Hugging Face API
        payload = {
            "inputs": prompt,
            "parameters": {
                "height": height,
                "width": width,
                "num_inference_steps": steps,
                "guidance_scale": guidance_scale,
                "max_sequence_length": 512  # FLUX.1-dev recommended max sequence length
            },
            "options": {
                "wait_for_model": True
            }
        }

        logger.debug(f"Sending request to Hugging Face API: {hf_api_url} with payload: {payload}")

        # Make the request to Hugging Face API
        response = requests.post(hf_api_url, headers=headers, json=payload)
        
        logger.debug(f"Received response with status code: {response.status_code}")

        if response.status_code != 200:
            # Log the error details for debugging purposes
            error_details = response.json()
            logger.error(f"Error from Hugging Face API: {error_details}")
            return jsonify({"error": error_details.get("error", "Error from Hugging Face API")}), response.status_code

        # The API returns the image directly as a binary blob
        img_byte_arr = response.content
        logger.debug(f"Image received, size: {len(img_byte_arr)} bytes")

        # Encode image to base64
        base64_image = base64.b64encode(img_byte_arr).decode('utf-8')
        logger.info(f"Image successfully encoded to base64, length: {len(base64_image)} characters")

        return jsonify({"image": base64_image})

    except Exception as e:
        # Log the error details for debugging purposes
        logger.exception(f"Error during image generation: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    logger.info("Starting Flask server...")
    app.run(host="0.0.0.0", port=8000, debug=True)
