// const Map = () => {
//   return (
//     <div className="flower-map-layout">
//       {/* 側邊欄：可以放妳的月份、地區篩選器（原本的實驗/新功能邏輯） */}
//       <aside className="map-sidebar">
//         <h2>賞花探索地圖</h2>
//         {/* 篩選功能元件放置處 */}
//       </aside>

//       {/* 地圖主體：剛才提供的 Google Maps 渲染區塊 */}
//       <main className="map-main-content">
//         {/* <APIProvider> 與 <Map> 塞在這裡 */}
//       </main>
//     </div>
//   )
// }

// export default Map

import React from 'react'
import { APIProvider, Map as GoogleMapComponent } from '@vis.gl/react-google-maps'

const Map = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  // 預設中心點設在台灣
  const defaultCenter = { lat: 23.973875, lng: 120.982024 }

  if (!apiKey) {
    return <div style={{ color: 'red', padding: '20px' }}>提示：請先在 .env.local 設定 VITE_GOOGLE_MAPS_API_KEY</div>
  }

  return (
    <div style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}>
      <APIProvider apiKey={apiKey}>
        <GoogleMapComponent
          defaultCenter={defaultCenter}
          defaultZoom={8}
          mapId="DEMO_MAP_ID" // 測試用 ID
        />
      </APIProvider>
    </div>
  )
}

export default Map
