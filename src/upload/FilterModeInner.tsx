import React, { useRef, useState } from "react";
import { Grid } from "@material-ui/core";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

function FilterModeInnerx({
  addpostImageRef,
  ClickiMAGEtOBEfILTERED,
  index,
  itemUploadRefSD,
  itemUploadRef,
  wideimage,
  FilterSliderWidth,
  FilterSliderHeight,
  screenWidth,
  FilterSliderContainerWidth,
  selectedImage,
  matchTabletMobile,
  getImageWidth, pop
}: any): JSX.Element {




  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);



  return (
    <>

      {pop ? <img
        onClick={(e: any) => {

          ClickiMAGEtOBEfILTERED(e, index);
        }}
        src={
          itemUploadRef.current[index]
            ? itemUploadRef.current[index].src
            : null
        }
        style={{
          width: matchTabletMobile
            ? wideimage
              ? `${FilterSliderWidth}px`
              : "auto"
            : wideimage
              ? `${FilterSliderWidth}px`
              : "auto",
          height: matchTabletMobile
            ? wideimage
              ? "auto"
              : `${FilterSliderHeight}px`
            : wideimage
              ? "auto"
              : `${FilterSliderHeight}px`,

          position: "relative",
          margin: "auto",
          padding: "0px",
          borderTopLeftRadius:
            screenWidth > FilterSliderContainerWidth
              ? index === 0
                ? "0px"
                : "0px"
              : "0px",
          borderTopRightRadius:
            screenWidth > FilterSliderContainerWidth
              ? index === selectedImage.length - 1
                ? "0px"
                : "0px"
              : "0px",
          borderBottomLeftRadius:
            screenWidth > FilterSliderContainerWidth
              ? index === 0 && wideimage
                ? "0px"
                : "0px"
              : "0px",
          borderBottomRightRadius:
            screenWidth > FilterSliderContainerWidth
              ? index === selectedImage.length - 1 && wideimage
                ? "0px"
                : "0px"
              : "0px",

          display: pop ? 'block' : 'none'
        }}
      /> : <img
        ref={addpostImageRef}
        onClick={(e: any) => {

          ClickiMAGEtOBEfILTERED(e, index);
        }}
        src={
          itemUploadRefSD.current[index]
            ? itemUploadRefSD.current[index].src
            : null
        }
        style={{
          width: matchTabletMobile
            ? wideimage
              ? `${FilterSliderWidth}px`
              : "auto"
            : wideimage
              ? `${FilterSliderWidth}px`
              : "auto",
          height: matchTabletMobile
            ? wideimage
              ? "auto"
              : `${FilterSliderHeight}px`
            : wideimage
              ? "auto"
              : `${FilterSliderHeight}px`,

          position: "relative",
          margin: "auto",
          padding: "0px",
          borderTopLeftRadius:
            screenWidth > FilterSliderContainerWidth
              ? index === 0
                ? "0px"
                : "0px"
              : "0px",
          borderTopRightRadius:
            screenWidth > FilterSliderContainerWidth
              ? index === selectedImage.length - 1
                ? "0px"
                : "0px"
              : "0px",
          borderBottomLeftRadius:
            screenWidth > FilterSliderContainerWidth
              ? index === 0 && wideimage
                ? "0px"
                : "0px"
              : "0px",
          borderBottomRightRadius:
            screenWidth > FilterSliderContainerWidth
              ? index === selectedImage.length - 1 && wideimage
                ? "0px"
                : "0px"
              : "0px",
        }}
      />}
    </>
  );
}

export const FilterModeInner = React.memo(FilterModeInnerx);
