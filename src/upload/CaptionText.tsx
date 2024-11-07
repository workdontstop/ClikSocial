import React, {
    ChangeEvent,
    useRef,
    useState,
    useCallback,
    useEffect,
    useLayoutEffect,
} from "react";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { TextField } from "@material-ui/core";
import { Grid, GridSize } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import Masonry from "@mui/lab/Masonry";
import CircleIcon from "@mui/icons-material/Circle";
import { SuperCrop } from "./SuperCrop";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PhotoIcon from "@mui/icons-material/Photo";
import GifIcon from "@mui/icons-material/Gif";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Axios from "axios";
import CropIcon from "@mui/icons-material/Crop";
import CheckIcon from "@mui/icons-material/Check";
import { PreviewCanvasCropAll } from "./PreviewCanvasCropAll";
import { FilterModeArrow } from "./FilterModeArrow";
import { OptionsSlider } from "../profile/OptionsSlider";
import { convertHexToRGB } from "material-ui/utils/colorManipulator";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import UndoIcon from "@mui/icons-material/Undo";
import LayersIcon from "@mui/icons-material/Layers";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightModeIcon from "@mui/icons-material/LightMode";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import HighlightIcon from "@mui/icons-material/Highlight";
import Slider from "@material-ui/core/Slider";
import { HexColorPicker } from "react-colorful";
import ColorizeIcon from "@mui/icons-material/Colorize";
import EditIcon from "@mui/icons-material/Edit";
import PhotoSizeSelectLargeIcon from "@mui/icons-material/PhotoSizeSelectLarge";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import CloseIcon from "@mui/icons-material/Close";
import RestoreIcon from "@mui/icons-material/Restore";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import date from "date-and-time";
import { UpdateNavFilterReducer } from "../GlobalActions";
import { UpdateNavCropReducer } from "../GlobalActions";
import { AudioEditor } from "./AudioEditor";


function CaptionTextx({
    sizex, font1, font2,
    updatecaptiontop,
    captionvalues,
    transform, width,


}: any): JSX.Element {



    ///
    ///
    ///
    /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
    interface RootStateGlobalReducer {
        GlobalReducer: {
            snapStart: boolean;
            darkmode: boolean;

        };
    }


    const [shownav, setShownav] = useState<boolean>(true);
    ///
    ///
    ///
    /// GET SCREENHEIGHT FROM REDUX STORE
    const { darkmode } =
        useSelector((state: RootStateGlobalReducer) => ({
            ...state.GlobalReducer,
        }));

    const darkmodeReducer = darkmode;


    ///
    ///
    ///
    const { PaperStyleLight, PaperStyleDark } = useSelector(
        (state: RootStateOrAny) => ({
            ...state.PaperReducerLightnDark,
        })
    );
    var PaperStyleReducer = "";

    if (darkmodeReducer) {
        PaperStyleReducer = PaperStyleDark;
    } else {
        PaperStyleReducer = PaperStyleLight;
    }


    return (
        <>

            <TextField
                size={sizex}
                inputProps={{ style: { fontSize: font1 } }}
                InputLabelProps={{ style: { fontSize: font2 } }}
                onChange={updatecaptiontop}
                value={captionvalues.caption}
                style={{
                    transform: transform,
                    height: 'auto',
                    width: matchMobile ? '80vw' : '26vw',
                    paddingBottom: "0px",
                    paddingTop: "1.5vh",
                    position: "fixed",
                    bottom: matchMobile ? '34vh' : "45vh",
                    left: matchMobile ? '0vw' : "33.5vw",
                    zIndex: 26,
                    padding: '0vh',
                    borderRadius: '4%',
                    backgroundImage: PaperStyleReducer,
                }}
                label="Share Your Thoughts"
                type="text"
                name="caption"
                variant="outlined"
                multiline
                rows={4}  // You can adjust the number of rows as needed
            />



            <TextField
                size={sizex}
                inputProps={{ style: { fontSize: font1 } }}
                InputLabelProps={{ style: { fontSize: font2 } }}
                onChange={updatecaptiontop}
                value={captionvalues.topic}
                style={{
                    transform: transform,
                    width: matchMobile ? '80vw' : '26vw',
                    paddingBottom: "0px",
                    paddingTop: "1.5vh",
                    position: "fixed",
                    bottom: matchMobile ? '54vh' : "63vh",
                    left: matchMobile ? '0vw' : "33.5vw",
                    zIndex: 26,
                    padding: '0vh',
                    borderRadius: '4%',
                    backgroundImage: PaperStyleReducer,
                }}
                label="Topic"
                type="text"
                name="topic"
                variant="outlined"
                multiline
                rows={2} // Adjust the number of rows as needed
            />
        </>
    );
}

export const CaptionText = React.memo(CaptionTextx);
