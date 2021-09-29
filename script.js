(function(){
    var script = {
 "mouseWheelEnabled": true,
 "downloadEnabled": false,
 "start": "this.playAudioList([this.audio_16EC9D38_3229_BEB1_41C5_CFCC74A15F21]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 20,
 "overflow": "visible",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "verticalAlign": "top",
 "definitions": [{
 "viewerArea": "this.MainViewer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -110.1,
   "distance": 1,
   "backwardYaw": 76.56,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC69412_3219_4E70_41C4_0CC252751B3B"
  },
  {
   "yaw": 153.68,
   "distance": 1,
   "backwardYaw": 161.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367"
  }
 ],
 "label": "Imagem 11",
 "id": "panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D",
 "overlays": [
  "this.overlay_2206D70F_3267_4A50_41B0_A01764C47E0C",
  "this.overlay_229424F7_3268_CFB0_41B8_238E9940CD40",
  "this.overlay_22971201_326B_4A50_4190_CEDBD57D763C"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "initialPosition": {
  "yaw": -103.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_17DE51E1_32E8_C9D0_41C2_7760CDE6711A",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -74.93,
   "distance": 1,
   "backwardYaw": 108.97,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E"
  }
 ],
 "label": "Imagem 3",
 "id": "panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188",
 "overlays": [
  "this.overlay_224C1630_321B_4AB0_41C0_FFAEDAB0F436",
  "this.overlay_22FE4774_3218_CAB0_41AC_6DDA436E5599"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "initialPosition": {
  "yaw": -7.35,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_164490DF_32E8_C7F0_41C3_50B4DDBAF023",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -102.86,
  "class": "PanoramaCameraPosition",
  "pitch": -6.43
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_17A2619E_32E8_C670_4198_951E79F3326E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "id": "panorama_3DC51295_3227_4A70_41C5_017FDDA10488_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "targetPitch": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -142.35,
  "class": "PanoramaCameraPosition",
  "pitch": -27.55
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_17B4A1AB_32E8_C650_41A1_6AFBA788BA90",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -22.96,
  "class": "PanoramaCameraPosition",
  "pitch": 5.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_1676C140_32E8_C6D0_41C7_BDC576856649",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 105.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_163740C2_32E8_C7D0_4195_17956F2E62AF",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_17CB41D3_32E8_C9F0_41B7_B82B7ABF06AF",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 63.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_1783F167_32E8_C6D0_41AE_2DDE3A26F517",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -90,
   "distance": 1,
   "backwardYaw": 69.02,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3DC51295_3227_4A70_41C5_017FDDA10488"
  },
  {
   "yaw": 108.97,
   "distance": 1,
   "backwardYaw": -74.93,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188"
  }
 ],
 "label": "Imagem 2",
 "id": "panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA",
 "overlays": [
  "this.overlay_2244D125_321B_C650_41A7_A3AF2FBD5D12",
  "this.overlay_22ED1992_321B_4670_41A9_4550B8C1327A"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -122.14,
  "class": "PanoramaCameraPosition",
  "pitch": -8.27
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_17997191_32E8_C670_41B8_D1F638F37C61",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_147E1034_32E8_C6B0_41C4_0C5F76A72F44, 0)",
   "media": "this.album_3EB34655_3156_6028_4172_D6F19649A849",
   "player": "this.MapViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_147E1034_32E8_C6B0_41C4_0C5F76A72F44",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 127.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_164900FB_32E8_C7B0_41C8_5C63E241280D",
 "automaticZoomSpeed": 10
},
{
 "height": 908,
 "duration": 5000,
 "label": "241475138_411000547068826_3880984249447670558_n",
 "id": "photo_2D65BF90_3239_DA70_41A6_F8EB456586D9",
 "thumbnailUrl": "media/photo_2D65BF90_3239_DA70_41A6_F8EB456586D9_t.jpg",
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_2D65BF90_3239_DA70_41A6_F8EB456586D9.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "height": 3024,
 "duration": 5000,
 "label": "IMG_2444",
 "id": "album_3EB34655_3156_6028_4172_D6F19649A849_2",
 "thumbnailUrl": "media/album_3EB34655_3156_6028_4172_D6F19649A849_2_t.jpg",
 "width": 4032,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_3EB34655_3156_6028_4172_D6F19649A849_2.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -26.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_166EC132_32E8_C6B0_4195_8A3E1AAE3A67",
 "automaticZoomSpeed": 10
},
{
 "height": 1350,
 "duration": 5000,
 "label": "241856890_380662097112664_3230255013382669309_n",
 "id": "photo_2CA7B5AF_3239_CE50_41B7_4121EF691F66",
 "thumbnailUrl": "media/photo_2CA7B5AF_3239_CE50_41B7_4121EF691F66_t.jpg",
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_2CA7B5AF_3239_CE50_41B7_4121EF691F66.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -116.63,
   "distance": 1,
   "backwardYaw": 130.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E"
  }
 ],
 "label": "Imagem 5",
 "id": "panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2",
 "overlays": [
  "this.overlay_2256E741_3219_CAD0_4162_15D2C64171C6",
  "this.overlay_22E3C26B_3219_CAD0_41C3_E6F7C27BAAE8"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -136.22,
   "distance": 1,
   "backwardYaw": -52.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E"
  }
 ],
 "label": "Imagem 7",
 "id": "panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F",
 "overlays": [
  "this.overlay_22590F77_3218_BAB0_41B0_C339BEA65CDB"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "height": 3024,
 "duration": 5000,
 "label": "IMG_2439",
 "id": "album_3EB34655_3156_6028_4172_D6F19649A849_0",
 "thumbnailUrl": "media/album_3EB34655_3156_6028_4172_D6F19649A849_0_t.jpg",
 "width": 4032,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_3EB34655_3156_6028_4172_D6F19649A849_0.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08"
  },
  {
   "yaw": 76.56,
   "distance": 1,
   "backwardYaw": -110.1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D"
  }
 ],
 "label": "Imagem 12",
 "id": "panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7",
 "overlays": [
  "this.overlay_2229D25E_3269_4AF0_41A8_4AAE8A9FDA57",
  "this.overlay_22F9529B_3269_4A70_41C0_756F9157918F"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "initialPosition": {
  "yaw": -49.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_167C614D_32E8_C6D0_419F_41B3A6286373",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -30.31,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_1784415A_32E8_C6F0_41B2_51859A499E29",
 "automaticZoomSpeed": 10
},
{
 "height": 1080,
 "duration": 5000,
 "label": "241803346_882630256003173_5891227108050250717_n",
 "id": "photo_2CA7E363_3239_CAD0_41B2_79277A5B68F0",
 "thumbnailUrl": "media/photo_2CA7E363_3239_CAD0_41B2_79277A5B68F0_t.jpg",
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_2CA7E363_3239_CAD0_41B2_79277A5B68F0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 69.02,
   "distance": 1,
   "backwardYaw": -90,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA"
  }
 ],
 "label": "Imagem 1",
 "id": "panorama_3DC51295_3227_4A70_41C5_017FDDA10488",
 "overlays": [
  "this.overlay_22A528F7_3219_47B0_41BB_2D1924102A80"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "initialPosition": {
  "yaw": 69.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_17BFA1B8_32E8_C9B0_41B3_F6B546792240",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -110.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_15B2A058_32E8_C6F0_41B4_587D5A1C6C00",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_3DC51295_3227_4A70_41C5_017FDDA10488",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3DC51295_3227_4A70_41C5_017FDDA10488_camera"
  },
  {
   "media": "this.panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_camera"
  },
  {
   "media": "this.panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_camera"
  },
  {
   "media": "this.panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_camera"
  },
  {
   "media": "this.panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_camera"
  },
  {
   "media": "this.panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_camera"
  },
  {
   "media": "this.panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_camera"
  },
  {
   "media": "this.panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_camera"
  },
  {
   "media": "this.panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_camera"
  },
  {
   "media": "this.panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_camera"
  },
  {
   "media": "this.panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_camera"
  },
  {
   "media": "this.panorama_3CC69412_3219_4E70_41C4_0CC252751B3B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_camera"
  },
  {
   "media": "this.panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_camera"
  },
  {
   "media": "this.panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_camera"
  },
  {
   "media": "this.album_3EB34655_3156_6028_4172_D6F19649A849",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_16EC9D38_3229_BEB1_41C5_CFCC74A15F21.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_16EC9D38_3229_BEB1_41C5_CFCC74A15F21.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_16EC9D38_3229_BEB1_41C5_CFCC74A15F21",
 "data": {
  "label": "Wake up M\u00fasica Instrumental Animada Liberada Para Usar Em V\u00eddeos No Copyright_50k"
 }
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367"
  }
 ],
 "label": "Imagem 8",
 "id": "panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D",
 "overlays": [
  "this.overlay_227D9ECA_3218_FBD0_41BF_82DE54B0BFC9",
  "this.overlay_22995FA4_3218_DA50_418E_1FDB0F716E22"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -87.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_1666B124_32E8_C650_41B4_C802452CEC2B",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 92.14,
   "distance": 1,
   "backwardYaw": -91.26,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367"
  }
 ],
 "label": "Imagem 10",
 "id": "panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78",
 "overlays": [
  "this.overlay_237652F2_3267_4BB0_41C8_62B5142D7C22"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "initialPosition": {
  "yaw": 35.82,
  "class": "PanoramaCameraPosition",
  "pitch": -14.69
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_165F3116_32E8_C670_41BC_AD3688896BF9",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7"
  }
 ],
 "label": "Imagem 13",
 "id": "panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08",
 "overlays": [
  "this.overlay_2220A160_3269_46D0_41B4_A1B1C86A4BB5"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -91.26,
   "distance": 1,
   "backwardYaw": 92.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D"
  },
  {
   "yaw": 161.72,
   "distance": 1,
   "backwardYaw": 153.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D"
  }
 ],
 "label": "Imagem 9",
 "id": "panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367",
 "overlays": [
  "this.overlay_22ECA9C4_3267_79D0_4171_A6FA4514FF80",
  "this.overlay_2A6B57A9_3269_4A50_41AB_760FAF2E4A51",
  "this.overlay_2935D576_3229_4EB0_41C5_E66032A5BF7F"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 130.32,
   "distance": 1,
   "backwardYaw": -116.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2"
  },
  {
   "yaw": -52.32,
   "distance": 1,
   "backwardYaw": -136.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F"
  }
 ],
 "label": "Imagem 6",
 "id": "panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E",
 "overlays": [
  "this.overlay_225348F4_3219_47B0_41C2_434CD7A4581E",
  "this.overlay_2286C55C_3219_4EF0_41A5_9E7F70E04458"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D"
  }
 ],
 "label": "Imagem 14",
 "id": "panorama_3CC69412_3219_4E70_41C4_0CC252751B3B",
 "overlays": [
  "this.overlay_22F78CAE_3268_DE50_4199_00E8B9F98428"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 43.16,
  "class": "PanoramaCameraPosition",
  "pitch": -10.1
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_17E081EF_32E8_C9D0_41B5_A7796964BB58",
 "automaticZoomSpeed": 10
},
{
 "height": 1080,
 "duration": 5000,
 "label": "243164595_1306467346479536_6829867340931015324_n",
 "id": "photo_2CA67825_3239_C650_41C0_8149CA46A9A2",
 "thumbnailUrl": "media/photo_2CA67825_3239_C650_41C0_8149CA46A9A2_t.jpg",
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_2CA67825_3239_C650_41C0_8149CA46A9A2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188"
  }
 ],
 "label": "Imagem 4",
 "id": "panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E",
 "overlays": [
  "this.overlay_224A9B60_3219_5AD0_41B6_5DA830C60162",
  "this.overlay_22F8AC58_3219_5EF0_41C7_AC65D17E32F3",
  "this.overlay_2835ECFD_321F_5FB0_4186_AB45C5A80DAD"
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "thumbnailUrl": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "vfov": 180
},
{
 "initialPosition": {
  "yaw": -18.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_17EB81FC_32E8_C9B0_41BF_502B132253F7",
 "automaticZoomSpeed": 10
},
{
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "mouseControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "height": 1080,
 "duration": 5000,
 "label": "241542234_546271106649105_4384802014772287163_n",
 "id": "photo_2CA8C189_3239_C650_41C2_AFAE3AB0C4AB",
 "thumbnailUrl": "media/photo_2CA8C189_3239_C650_41C2_AFAE3AB0C4AB_t.jpg",
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_2CA8C189_3239_C650_41C2_AFAE3AB0C4AB.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 88.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_163DA0D1_32E8_C7F0_41B4_B8CF1DD88D31",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MapViewer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "MapViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "initialPosition": {
  "yaw": -79.9,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_17915183_32E8_C650_419C_078163F6DD22",
 "automaticZoomSpeed": 10
},
{
 "class": "PhotoAlbum",
 "label": "\u00c1lbum de Fotos IMG_2439",
 "id": "album_3EB34655_3156_6028_4172_D6F19649A849",
 "thumbnailUrl": "media/album_3EB34655_3156_6028_4172_D6F19649A849_t.png",
 "playList": "this.album_3EB34655_3156_6028_4172_D6F19649A849_AlbumPlayList"
},
{
 "initialPosition": {
  "yaw": 151.53,
  "class": "PanoramaCameraPosition",
  "pitch": -6.43
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_164280ED_32E8_C7D0_4195_00B25DE9741D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 169.9,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_17C041C6_32E8_C9D0_41B8_197ACB784EDB",
 "automaticZoomSpeed": 10
},
{
 "height": 1080,
 "duration": 5000,
 "label": "241028929_268568808191394_8629228233453695371_n",
 "id": "photo_2CB45E45_3239_DAD0_41B8_2C52150CA663",
 "thumbnailUrl": "media/photo_2CB45E45_3239_DAD0_41B8_2C52150CA663_t.jpg",
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_2CB45E45_3239_DAD0_41B8_2C52150CA663.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "items": [
  {
   "media": "this.panorama_3DC51295_3227_4A70_41C5_017FDDA10488",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3DC51295_3227_4A70_41C5_017FDDA10488_camera"
  },
  {
   "media": "this.panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_camera"
  },
  {
   "media": "this.panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_camera"
  },
  {
   "media": "this.panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_camera"
  },
  {
   "media": "this.panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_camera"
  },
  {
   "media": "this.panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_camera"
  },
  {
   "media": "this.panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_camera"
  },
  {
   "media": "this.panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_camera"
  },
  {
   "media": "this.panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_camera"
  },
  {
   "media": "this.panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_camera"
  },
  {
   "media": "this.panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_camera"
  },
  {
   "media": "this.panorama_3CC69412_3219_4E70_41C4_0CC252751B3B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_camera"
  },
  {
   "media": "this.panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_camera"
  },
  {
   "media": "this.panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 0)",
   "media": "this.album_3EB34655_3156_6028_4172_D6F19649A849",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 43.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_178BF175_32E8_C6B0_4195_63DA17D27748",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -71.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_1650C109_32E8_C650_41A2_BC8300520807",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_camera",
 "automaticZoomSpeed": 10
},
{
 "height": 3024,
 "duration": 5000,
 "label": "IMG_2443",
 "id": "album_3EB34655_3156_6028_4172_D6F19649A849_1",
 "thumbnailUrl": "media/album_3EB34655_3156_6028_4172_D6F19649A849_1_t.jpg",
 "width": 4032,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_3EB34655_3156_6028_4172_D6F19649A849_1.JPG",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_camera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "left": 0,
 "toolTipShadowOpacity": 0,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "toolTipBackgroundColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "minWidth": 100,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "height": "100%",
 "progressBottom": 0,
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadHeight": 15,
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": 13,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "backgroundOpacity": 0,
 "width": 300,
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "layout": "absolute",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "height": "100%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "overflow": "scroll",
 "height": 641,
 "paddingRight": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "0%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "paddingBottom": 0,
 "visible": false,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "0%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "paddingBottom": 0,
 "visible": false,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "0%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "paddingBottom": 0,
 "visible": false,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "0%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "paddingBottom": 0,
 "visible": false,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "0%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "paddingBottom": 0,
 "visible": false,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "0%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "paddingBottom": 0,
 "visible": false,
 "paddingLeft": 0
},
{
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "paddingRight": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "maxWidth": 58,
 "paddingLeft": 0
},
{
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "paddingRight": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "maxWidth": 58,
 "paddingLeft": 0
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "right": 10,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "top": "20%",
 "propagateClick": true,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "verticalAlign": "middle",
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "IconButton >"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "left": 10,
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "top": "20%",
 "propagateClick": true,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "verticalAlign": "middle",
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "IconButton <"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "maxWidth": 60
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367, this.camera_17EB81FC_32E8_C9B0_41BF_502B132253F7); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 33.34,
   "yaw": 153.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -12.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2754B8_3269_4FB0_41A5_80B75E91EF1F",
   "yaw": 153.68,
   "hfov": 33.34,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.62,
   "distance": 100
  }
 ],
 "id": "overlay_2206D70F_3267_4A50_41B0_A01764C47E0C"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7, this.camera_17DE51E1_32E8_C9D0_41C2_7760CDE6711A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 29.48,
   "yaw": -110.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -15.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2545E01E_3278_C670_41C2_1CBFDBAB2493",
   "yaw": -110.1,
   "hfov": 29.48,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.89,
   "distance": 100
  }
 ],
 "id": "overlay_229424F7_3268_CFB0_41B8_238E9940CD40"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC69412_3219_4E70_41C4_0CC252751B3B, this.camera_17E081EF_32E8_C9D0_41B5_A7796964BB58); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 29.04,
   "yaw": -9.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_1_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -18.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2545801E_3278_C670_41BC_11508C54BA96",
   "yaw": -9.86,
   "hfov": 29.04,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.65,
   "distance": 100
  }
 ],
 "id": "overlay_22971201_326B_4A50_4190_CEDBD57D763C"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA, this.camera_1650C109_32E8_C650_41A2_BC8300520807); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 27.9,
   "yaw": -74.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -24.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2E1DBA38_3218_BAB0_41A3_B4AD2A11ACAC",
   "yaw": -74.93,
   "hfov": 27.9,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.43,
   "distance": 100
  }
 ],
 "id": "overlay_224C1630_321B_4AB0_41C0_FFAEDAB0F436"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E, this.camera_165F3116_32E8_C670_41BC_AD3688896BF9); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 28.07,
   "yaw": 75.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -23.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_254BB01B_3278_C670_4195_9B2984638650",
   "yaw": 75.3,
   "hfov": 28.07,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.68,
   "distance": 100
  }
 ],
 "id": "overlay_22FE4774_3218_CAB0_41AC_6DDA436E5599"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3DC51295_3227_4A70_41C5_017FDDA10488, this.camera_15B2A058_32E8_C6F0_41B4_587D5A1C6C00); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 27.79,
   "yaw": -90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -24.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2E1C3A37_3218_BAB0_41BC_AA0E2ABD557D",
   "yaw": -90,
   "hfov": 27.79,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.93,
   "distance": 100
  }
 ],
 "id": "overlay_2244D125_321B_C650_41A7_A3AF2FBD5D12"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188, this.camera_163740C2_32E8_C7D0_4195_17956F2E62AF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 29.51,
   "yaw": 108.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -15.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_254A101B_3278_C670_41B4_9311A6AE3533",
   "yaw": 108.97,
   "hfov": 29.51,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.64,
   "distance": 100
  }
 ],
 "id": "overlay_22ED1992_321B_4670_41A9_4550B8C1327A"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E, this.camera_1784415A_32E8_C6F0_41B2_51859A499E29); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 28.48,
   "yaw": 144.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -21.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2E12BA38_3218_BAB0_41B9_0E334CD7E8A2",
   "yaw": 144.14,
   "hfov": 28.48,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.67,
   "distance": 100
  }
 ],
 "id": "overlay_2256E741_3219_CAD0_4162_15D2C64171C6"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E, this.camera_167C614D_32E8_C6D0_419F_41B3A6286373); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 27.38,
   "yaw": -116.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -26.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2544B01C_3278_C670_41B4_B8BDC6EEC9A8",
   "yaw": -116.63,
   "hfov": 27.38,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.69,
   "distance": 100
  }
 ],
 "id": "overlay_22E3C26B_3219_CAD0_41C3_E6F7C27BAAE8"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E, this.camera_164900FB_32E8_C7B0_41C8_5C63E241280D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 28.12,
   "yaw": -136.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -23.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDB8995_3227_4670_41C5_810ED15E0FA0",
   "yaw": -136.22,
   "hfov": 28.12,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.43,
   "distance": 100
  }
 ],
 "id": "overlay_22590F77_3218_BAB0_41B0_C339BEA65CDB"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08, this.camera_17B4A1AB_32E8_C650_41A1_6AFBA788BA90); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 28.07,
   "yaw": -20.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -23.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2546801F_3278_C670_41B5_82AF536FD7BD",
   "yaw": -20.91,
   "hfov": 28.07,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.68,
   "distance": 100
  }
 ],
 "id": "overlay_2229D25E_3269_4AF0_41A8_4AAE8A9FDA57"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D, this.camera_17BFA1B8_32E8_C9B0_41B3_F6B546792240); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 29.4,
   "yaw": 76.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -16.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2546301F_3278_C670_41AC_A1EAAA25BCB0",
   "yaw": 76.56,
   "hfov": 29.4,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.39,
   "distance": 100
  }
 ],
 "id": "overlay_22F9529B_3269_4A70_41C0_756F9157918F"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA, this.camera_17CB41D3_32E8_C9F0_41B7_B82B7ABF06AF); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 28.82,
   "yaw": 69.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_254AC019_3278_C670_4194_BE3F7168D20A",
   "yaw": 69.02,
   "hfov": 28.82,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.91,
   "distance": 100
  }
 ],
 "id": "overlay_22A528F7_3219_47B0_41BB_2D1924102A80"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 29.25,
   "yaw": 87.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2545B01C_3278_C670_419C_234FAAAB7CA7",
   "yaw": 87.11,
   "hfov": 29.25,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.4,
   "distance": 100
  }
 ],
 "id": "overlay_227D9ECA_3218_FBD0_41BF_82DE54B0BFC9"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367, this.camera_164490DF_32E8_C7F0_41C3_50B4DDBAF023); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 29.44,
   "yaw": -139.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -16.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2E13CA39_3218_BAB0_41B6_59E404A84CD7",
   "yaw": -139.99,
   "hfov": 29.44,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.14,
   "distance": 100
  }
 ],
 "id": "overlay_22995FA4_3218_DA50_418E_1FDB0F716E22"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367, this.camera_163DA0D1_32E8_C7F0_41B4_B8CF1DD88D31); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 28.77,
   "yaw": 92.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -20.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2634B8_3269_4FB0_41B2_D3180C2BB461",
   "yaw": 92.14,
   "hfov": 28.77,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.16,
   "distance": 100
  }
 ],
 "id": "overlay_237652F2_3267_4BB0_41C8_62B5142D7C22"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7, this.camera_164280ED_32E8_C7D0_4195_00B25DE9741D); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 27.01,
   "yaw": -36.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -28.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B2154B9_3269_4FB0_418F_D25F715D4F06",
   "yaw": -36.24,
   "hfov": 27.01,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.2,
   "distance": 100
  }
 ],
 "id": "overlay_2220A160_3269_46D0_41B4_A1B1C86A4BB5"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78, this.camera_1666B124_32E8_C650_41B4_C802452CEC2B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 28.12,
   "yaw": -91.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -23.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2544801D_3278_C670_41C6_2ECDE6CABD3D",
   "yaw": -91.26,
   "hfov": 28.12,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.43,
   "distance": 100
  }
 ],
 "id": "overlay_22ECA9C4_3267_79D0_4171_A6FA4514FF80"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D, this.camera_166EC132_32E8_C6B0_4195_8A3E1AAE3A67); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 28.91,
   "yaw": 161.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B24F4B7_3269_4FB0_41BC_7C09D0A44525",
   "yaw": 161.72,
   "hfov": 28.91,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.41,
   "distance": 100
  }
 ],
 "id": "overlay_2A6B57A9_3269_4A50_41AB_760FAF2E4A51"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D, this.camera_1676C140_32E8_C6D0_41C7_BDC576856649); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 24.65,
   "yaw": -4.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0_HS_4_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -8.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F4CFBEF_3229_79D0_41C4_59E06DEF0C41",
   "yaw": -4.99,
   "hfov": 24.65,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -8.73,
   "distance": 100
  }
 ],
 "id": "overlay_2935D576_3229_4EB0_41C5_E66032A5BF7F"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2, this.camera_1783F167_32E8_C6D0_41AE_2DDE3A26F517); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 29.4,
   "yaw": 130.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -16.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDAB994_3227_4670_417B_2219224A1F14",
   "yaw": 130.32,
   "hfov": 29.4,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.39,
   "distance": 100
  }
 ],
 "id": "overlay_225348F4_3219_47B0_41C2_434CD7A4581E"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F, this.camera_178BF175_32E8_C6B0_4195_63DA17D27748); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 26.35,
   "yaw": -52.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -30.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDA0994_3227_4670_41C5_52D1D5FF85F2",
   "yaw": -52.32,
   "hfov": 26.35,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.71,
   "distance": 100
  }
 ],
 "id": "overlay_2286C55C_3219_4EF0_41A5_9E7F70E04458"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D, this.camera_17C041C6_32E8_C9D0_41B8_197ACB784EDB); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 26.95,
   "yaw": -61.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -28.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2546D01F_3278_C670_4185_EDCCDDF77AA4",
   "yaw": -61.61,
   "hfov": 26.95,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.45,
   "distance": 100
  }
 ],
 "id": "overlay_22F78CAE_3268_DE50_4199_00E8B9F98428"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2, this.camera_17915183_32E8_C650_419C_078163F6DD22); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 30.15,
   "yaw": 112.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F5ECB3F_321B_BAB0_4187_2D6E55125EA0",
   "yaw": 112.23,
   "hfov": 30.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.36,
   "distance": 100
  }
 ],
 "id": "overlay_224A9B60_3219_5AD0_41B6_5DA830C60162"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D, this.camera_17997191_32E8_C670_41B8_D1F638F37C61); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 28.82,
   "yaw": -26.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_254B301B_3278_C670_41BA_9AF2D3779B4C",
   "yaw": -26.94,
   "hfov": 28.82,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.91,
   "distance": 100
  }
 ],
 "id": "overlay_22F8AC58_3219_5EF0_41C7_AC65D17E32F3"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188, this.camera_17A2619E_32E8_C670_4198_951E79F3326E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 28.28,
   "yaw": -149.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -22.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F5FAB3F_321B_BAB0_41A0_EA3EC877926C",
   "yaw": -149.79,
   "hfov": 28.28,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.67,
   "distance": 100
  }
 ],
 "id": "overlay_2835ECFD_321F_5FB0_4186_AB45C5A80DAD"
},
{
 "maxHeight": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "height": 58,
 "mode": "push",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton VR"
 },
 "paddingBottom": 0,
 "visible": false,
 "cursor": "hand",
 "transparencyActive": true,
 "maxWidth": 58,
 "paddingLeft": 0
},
{
 "maxHeight": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "paddingRight": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton HS "
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "maxWidth": 58,
 "paddingLeft": 0
},
{
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "paddingRight": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "maxWidth": 58,
 "paddingLeft": 0
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "left": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "minWidth": 1,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "height": "99.975%",
 "progressBottom": 2,
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadHeight": 15,
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": 12,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "items": [
  {
   "media": "this.photo_2CA67825_3239_C650_41C0_8149CA46A9A2",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.59",
     "class": "PhotoCameraPosition",
     "y": "0.63"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_2CA8C189_3239_C650_41C2_AFAE3AB0C4AB",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.54",
     "class": "PhotoCameraPosition",
     "y": "0.43"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_2CA7E363_3239_CAD0_41B2_79277A5B68F0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "y": "0.38"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_2CA7B5AF_3239_CE50_41B7_4121EF691F66",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "y": "0.56"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_2CB45E45_3239_DAD0_41B8_2C52150CA663",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.36",
     "class": "PhotoCameraPosition",
     "y": "0.57"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_2D65BF90_3239_DA70_41A6_F8EB456586D9",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.44",
     "class": "PhotoCameraPosition",
     "y": "0.44"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_3EB34655_3156_6028_4172_D6F19649A849_0",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.48",
     "class": "PhotoCameraPosition",
     "y": "0.73"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_3EB34655_3156_6028_4172_D6F19649A849_1",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.44",
     "class": "PhotoCameraPosition",
     "y": "0.34"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_3EB34655_3156_6028_4172_D6F19649A849_2",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.52",
     "class": "PhotoCameraPosition",
     "y": "0.61"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_3EB34655_3156_6028_4172_D6F19649A849_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "backgroundOpacity": 0,
 "width": 66,
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "shadow": false,
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "layout": "absolute",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "height": "100%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "paddingBottom": 0,
 "visible": false,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "backgroundOpacity": 0.7,
 "width": 300,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "0%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingRight": 40,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 40,
 "backgroundColor": [
  "#000000"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "paddingBottom": 40,
 "paddingLeft": 40
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "propagateClick": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "height": 110,
 "paddingRight": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "bottom": "0%",
 "overflow": "scroll",
 "paddingRight": 0,
 "layout": "vertical",
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "height": "85.959%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "paddingBottom": 0,
 "visible": false,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "left": "15%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "15%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarVisible": "rollOver",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "right",
 "minHeight": 1,
 "shadow": false,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "top": "10%",
 "layout": "vertical",
 "verticalAlign": "top",
 "bottom": "80%",
 "paddingRight": 20,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 20,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "left": "15%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "15%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "left": "15%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "15%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "right",
 "minHeight": 1,
 "shadow": false,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "top": "10%",
 "layout": "vertical",
 "verticalAlign": "top",
 "bottom": "80%",
 "paddingRight": 20,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 20,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "backgroundOpacity": 1,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "left": "15%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "15%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "left": "15%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "15%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "left": "15%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "right": "15%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarVisible": "rollOver",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "right",
 "minHeight": 1,
 "shadow": false,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "top": "10%",
 "layout": "vertical",
 "verticalAlign": "top",
 "bottom": "80%",
 "paddingRight": 20,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 20,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2754B8_3269_4FB0_41A5_80B75E91EF1F",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2545E01E_3278_C670_41C2_1CBFDBAB2493",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC80247_3218_CAD0_41B9_33417FCF6D5D_1_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2545801E_3278_C670_41BC_11508C54BA96",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2E1DBA38_3218_BAB0_41A3_B4AD2A11ACAC",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC869A0_3227_4650_41B3_DD9E8CAC7188_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_254BB01B_3278_C670_4195_9B2984638650",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2E1C3A37_3218_BAB0_41BC_AA0E2ABD557D",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3D35CEBB_3227_5BB0_41BA_41EEC4539EFA_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_254A101B_3278_C670_41B4_9311A6AE3533",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2E12BA38_3218_BAB0_41B9_0E334CD7E8A2",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC831BF_3227_49B0_41B8_9A465BF790E2_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2544B01C_3278_C670_41B4_B8BDC6EEC9A8",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC85742_3218_CAD0_41BB_36B6AF50459F_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2CDB8995_3227_4670_41C5_810ED15E0FA0",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2546801F_3278_C670_41B5_82AF536FD7BD",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3D3A7DFD_3218_B9B0_41BE_642D014853C7_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2546301F_3278_C670_41AC_A1EAAA25BCB0",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3DC51295_3227_4A70_41C5_017FDDA10488_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_254AC019_3278_C670_4194_BE3F7168D20A",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2545B01C_3278_C670_419C_234FAAAB7CA7",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3D3A2179_3218_C6B0_41C3_F1F0B3412B5D_0_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2E13CA39_3218_BAB0_41B6_59E404A84CD7",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3D39173E_3218_CAB0_41A9_2DB0D09E9F78_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2634B8_3269_4FB0_41B2_D3180C2BB461",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC81A17_3219_5A70_41A3_249B5BC0BB08_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2B2154B9_3269_4FB0_418F_D25F715D4F06",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2544801D_3278_C670_41C6_2ECDE6CABD3D",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2B24F4B7_3269_4FB0_41BC_7C09D0A44525",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC80BBD_3218_F9B0_41A7_0F0DCB08A367_0_HS_4_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2F4CFBEF_3229_79D0_41C4_59E06DEF0C41",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2CDAB994_3227_4670_417B_2219224A1F14",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3D3BAC97_3218_BE7F_41B1_5C6FD604EA7E_0_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2CDA0994_3227_4670_41C5_52D1D5FF85F2",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3CC69412_3219_4E70_41C4_0CC252751B3B_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2546D01F_3278_C670_4185_EDCCDDF77AA4",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2F5ECB3F_321B_BAB0_4187_2D6E55125EA0",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_254B301B_3278_C670_41BA_9AF2D3779B4C",
 "colCount": 4,
 "frameCount": 21
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3D3CA51F_3227_4E70_41C8_2A3C58FBCC4E_0_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_2F5FAB3F_321B_BAB0_41A0_EA3EC877926C",
 "colCount": 4,
 "frameCount": 21
},
{
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "backgroundOpacity": 0.4,
 "width": 36,
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "maxHeight": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "backgroundOpacity": 0,
 "width": 50,
 "left": 10,
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "verticalAlign": "middle",
 "bottom": "40%",
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 1,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "IconButton arrow"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "maxWidth": 80
},
{
 "maxHeight": 1095,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "shadow": false,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "height": "25%",
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 1095
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
  "this.Button_12DBE91B_323F_4677_41C7_057DB90D30EE"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadow": false,
 "scrollBarWidth": 10,
 "top": "25%",
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": "25%",
 "overflow": "scroll",
 "paddingRight": 0,
 "layout": "vertical",
 "minWidth": 1,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "bottom",
 "bottom": "0%",
 "overflow": "scroll",
 "paddingRight": 0,
 "layout": "vertical",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "height": "26.316%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "height": 60,
 "mode": "toggle",
 "paddingRight": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "image button menu"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "maxWidth": 60,
 "paddingLeft": 0
},
{
 "maxHeight": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "verticalAlign": "middle",
 "height": 58,
 "mode": "push",
 "paddingRight": 0,
 "borderSize": 0,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "maxWidth": 58,
 "paddingLeft": 0
},
{
 "maxHeight": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "height": 58,
 "mode": "push",
 "paddingRight": 0,
 "borderSize": 0,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton FB"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "maxWidth": 58,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.51,
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "paddingRight": 50,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 20,
 "minWidth": 460,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "paddingBottom": 20,
 "paddingLeft": 50
},
{
 "maxHeight": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "width": "25%",
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "height": "75%",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "maxWidth": 60,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 140,
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "backgroundOpacity": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "left": 0,
 "shadow": false,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "horizontalAlign": "center",
 "minHeight": 1,
 "itemPaddingLeft": 3,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "itemOpacity": 1,
 "paddingRight": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemMinWidth": 50,
 "minWidth": 1,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "height": "92%",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "borderSize": 0,
 "class": "ThumbnailGrid",
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "paddingLeft": 70,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadow": true,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "itemThumbnailHeight": 125,
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemHorizontalAlign": "center",
 "itemPaddingBottom": 3,
 "gap": 26,
 "itemWidth": 220,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelHorizontalAlign": "center",
 "paddingTop": 10,
 "itemLabelFontStyle": "italic",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "paddingBottom": 70,
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "itemMaxWidth": 1000
},
{
 "height": "100%",
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "insetBorder": false,
 "minHeight": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollEnabled": true,
 "minWidth": 1,
 "class": "WebFrame",
 "borderSize": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "maxHeight": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "height": "75%",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "maxWidth": 60,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "layout": "absolute",
 "verticalAlign": "top",
 "height": 140,
 "paddingRight": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "55%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.51,
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "45%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "paddingRight": 60,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 20,
 "minWidth": 460,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "paddingBottom": 20,
 "paddingLeft": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "width": "25%",
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "propagateClick": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "height": "75%",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "maxWidth": 60,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "textDecoration": "none",
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "backgroundOpacity": 0,
 "fontWeight": "normal",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "shadow": false,
 "width": "100%",
 "horizontalAlign": "left",
 "borderRadius": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "gap": 5,
 "borderSize": 0,
 "label": "Localiza\u00e7\u00e3o",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.openLink('https://goo.gl/maps/ZvVfRGTo9pC9PDDM6', '_blank')",
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Tour Info"
 },
 "paddingBottom": 0,
 "layout": "horizontal",
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "textDecoration": "none",
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "backgroundOpacity": 0,
 "fontWeight": "normal",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "shadow": false,
 "width": "100%",
 "horizontalAlign": "left",
 "borderRadius": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "gap": 23,
 "borderSize": 0,
 "label": "Instagram",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "click": "this.openLink('https://www.instagram.com/deluxcar.udi/', '_blank')",
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Panorama List"
 },
 "paddingBottom": 0,
 "layout": "horizontal",
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "textDecoration": "none",
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "pressedLabel": "Location",
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "backgroundOpacity": 0,
 "fontWeight": "normal",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "shadow": false,
 "width": "100%",
 "horizontalAlign": "left",
 "borderRadius": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "gap": 5,
 "borderSize": 0,
 "label": "WhatsApp",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.openLink('https://api.whatsapp.com/send?phone=5534988691698&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20pessoal%20da%20Delux%20Car.', '_blank')",
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Location"
 },
 "paddingBottom": 0,
 "layout": "horizontal",
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "textDecoration": "none",
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "backgroundOpacity": 0,
 "fontWeight": "normal",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "shadow": false,
 "width": "100%",
 "horizontalAlign": "left",
 "borderRadius": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "gap": 5,
 "borderSize": 0,
 "label": "Fotos",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.MapViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_147E1034_32E8_C6B0_41C4_0C5F76A72F44.set('selectedIndex', -1); }, this); this.playList_147E1034_32E8_C6B0_41C4_0C5F76A72F44.set('selectedIndex', 0)",
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floorplan"
 },
 "paddingBottom": 0,
 "layout": "horizontal",
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "textDecoration": "none",
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "pressedLabel": "Location",
 "id": "Button_12DBE91B_323F_4677_41C7_057DB90D30EE",
 "backgroundOpacity": 0,
 "fontWeight": "normal",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "shadow": false,
 "width": "100%",
 "horizontalAlign": "left",
 "borderRadius": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "gap": 5,
 "borderSize": 0,
 "label": "Site",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.openLink('https://delux-car-recuperadora-de-veiculos.negocio.site/?utm_source=gmb&utm_medium=referral', '_blank')",
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Location"
 },
 "paddingBottom": 0,
 "layout": "horizontal",
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 2,
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 78,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Delux Car</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tel: (34) 3235-4578</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Av. Fernando Vilela, 1655</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Martins</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Uberl\u00e2ndia - MG</I></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "maxHeight": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "backgroundOpacity": 0,
 "width": 42,
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "propagateClick": true,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "verticalAlign": "middle",
 "height": 42,
 "mode": "push",
 "paddingRight": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton collapse"
 },
 "paddingBottom": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "maxWidth": 80,
 "paddingLeft": 0
},
{
 "maxHeight": 1000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "height": "100%",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 2000
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "right",
 "minHeight": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 50,
 "paddingRight": 0,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.79,
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 300,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 100,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "paddingBottom": 10,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 30,
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadow": false,
 "horizontalAlign": "right",
 "borderRadius": 0,
 "right": 20,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "verticalAlign": "top",
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "height": "36.14%",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadow": false,
 "horizontalAlign": "right",
 "borderRadius": 0,
 "right": 20,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "verticalAlign": "top",
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "height": "36.14%",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "maxWidth": 60
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "left": "0%",
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "minWidth": 1,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "height": "100%",
 "progressBottom": 2,
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadHeight": 15,
 "displayTooltipInTouchScreens": true,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": 12,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "width": "10%",
 "shadow": false,
 "horizontalAlign": "right",
 "borderRadius": 0,
 "right": 20,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": true,
 "top": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "verticalAlign": "top",
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "height": "10%",
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "height": "100%",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 2000
},
{
 "scrollBarOpacity": 0.5,
 "height": "5%",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "right",
 "minHeight": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "paddingRight": 0,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 20,
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.79,
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 520,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 100,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "paddingBottom": 30,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 40,
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.51vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "height": "100%",
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "paddingBottom": 20,
 "paddingLeft": 10
},
{
 "textDecoration": "none",
 "iconWidth": 32,
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "width": 180,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "shadow": false,
 "horizontalAlign": "center",
 "borderRadius": 50,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": "2.39vh",
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "label": "LOREM IPSUM",
 "fontStyle": "italic",
 "paddingTop": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "class": "Button",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button31015"
 },
 "paddingLeft": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 6
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "height": "46%",
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 10,
 "paddingLeft": 0
},
{
 "scrollBarOpacity": 0.5,
 "height": "75%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "paddingRight": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 1,
 "class": "Container",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "paddingBottom": 0,
 "paddingLeft": 0
},
{
 "maxHeight": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "width": "25%",
 "shadow": false,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "height": "100%",
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 200
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "height": "100%",
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 10,
 "paddingLeft": 10
}],
 "vrPolyfillScale": 0.5,
 "layout": "absolute",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "gap": 10,
 "contentOpaque": false,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "minWidth": 20,
 "scripts": {
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "existsKey": function(key){  return key in window; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getKey": function(key){  return window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } }
 },
 "class": "Player",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
