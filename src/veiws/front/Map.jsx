import { APIProvider, Map as GoogleMap, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'
import { flowerData } from '../../data/flowerData'

const Map = () => {
  // 1. 修正：正確讀取環境變數
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const defaultCenter = { lat: 23.973875, lng: 120.982024 }

  return (
    // 2. 補上行內樣式防禦，確保一定有高寬，避免 CSS 沒吃到導致塌陷
    <div className="flower-map-layout" style={{ display: 'flex', width: '100%', height: 'calc(100vh - 64px)' }}>
      {/* 側邊欄 */}
      <aside className="map-sidebar" style={{ width: '360px', padding: '24px', background: '#fcfbfa' }}>
        <h2 className="sidebar-title">尋找花緒</h2>
        <div className="filter-group">
          <p style={{ color: '#666', fontSize: '14px' }}>篩選元件預留區...</p>
        </div>
      </aside>

      {/* 地圖主體 */}
      <main className="map-main-content" style={{ flex: 1, height: '100%' }}>
        <APIProvider apiKey={apiKey}>
          <GoogleMap
            defaultCenter={defaultCenter}
            defaultZoom={8}
            mapId="DEMO_MAP_ID"
            style={{ width: '100%', height: '100%' }}
          >
            {flowerData.map(item => (
              <AdvancedMarker
                key={item.id}
                position={item.location}
                title={item.title}
              >
                <Pin
                  background="rgb(201, 158, 113)"
                  borderColor="#8c5e5e"
                  glyphColor="#ffffff"
                />
              </AdvancedMarker>
            ))}
          </GoogleMap>
        </APIProvider>
      </main>
    </div>
  )
}

export default Map
