import { APIProvider, Map as GoogleMap, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'
import { flowerData } from '../../data/flowerData'
import { useState } from 'react'

const Map = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const defaultCenter = { lat: 23.703870, lng: 120.982020 }
  const [showCard, setShowCard] = useState(null)

  return (
    <div className="container mt-5">
      <div className="row mt-6">
        <aside className="d-none d-md-block col-md-5 map-sidebar" style={{ width: '360px', padding: '24px', background: '#fcfbfa' }}>
          <h2 className="sidebar-title">尋找花緒</h2>
          <div className="filter-group">
            <p style={{ color: '#666', fontSize: '14px' }}>篩選元件預留區...</p>
          </div>
        </aside>

        <main className="col-12 col-md-7 map-main-content">
          <APIProvider apiKey={apiKey}>
            <GoogleMap
              className="googlemap-custom"
              defaultCenter={defaultCenter}
              defaultZoom={7.5}
              mapId="DEMO_MAP_ID"
              onClick={() => setShowCard(null)}
            >
              {flowerData.map(item => (
                <AdvancedMarker
                  key={item.id}
                  position={item.location}
                  title={item.title}
                  onClick={() => { setShowCard(item) }}
                >
                  <Pin
                    background="rgb(201, 158, 113)"
                    borderColor="#8c5e5e"
                    glyphColor="#ffffff"
                  />
                </AdvancedMarker>
              ))}
              {showCard && (
                <InfoWindow
                  className="infoWindow-custom"
                  position={showCard.location}
                  onCloseClick={() => { setShowCard(null) }}
                >
                  <div className="map-card-custom">
                    <img
                      src={showCard.image_url}
                      className="map-card-img"
                      alt={showCard.title}
                    />
                    <div className="map-card-content">
                      <h5>{showCard.title}</h5>
                      <p>{showCard.description || ''}</p>
                      <div className="card-group">
                        <button className="btn btn-primary-500 btn-sm flex-grow-1">
                          詳細內容
                        </button>
                        <a className="btn btn-outline-primary-500 btn-sm flex-grow-1" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(showCard.title)}`} target="_blank" rel="noreferrer">
                          Google地標
                        </a>
                      </div>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </APIProvider>
        </main>
      </div>
    </div>
  )
}

export default Map
