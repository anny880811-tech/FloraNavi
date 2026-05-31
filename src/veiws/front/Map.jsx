import { APIProvider, Map as GoogleMap, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'
import { flowerData } from '../../data/flowerData'
import { useState } from 'react'

const Map = () => {
  const [showCard, setShowCard] = useState(null)
  const [selectCity, setSelectCity] = useState('')
  const [selectFlower, setSelectFlower] = useState('')

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const defaultCenter = { lat: 23.703870, lng: 120.982020 }

  // const cityList = [...new Set(flowerData.map(item => item.location.city))]
  // const flowerList = [...new Set(flowerData.map(item => item.flower_name))]

  const cityList = [...new Set(
    flowerData
      .filter(item => selectFlower === '' || item.flower_name === selectFlower)
      .map(item => item.location.city),
  )]
  const flowerList = [...new Set(
    flowerData
      .filter(item => selectCity === '' || item.location.city === selectCity)
      .map(item => item.flower_name),
  )]

  console.log(cityList)
  console.log(flowerList)

  return (
    <div className="container map-page">
      <div className="row mt-6">
        <aside className="d-none d-md-block col-md-4 map-sidebar">
          <div className="block-custom">
            <div className="d-flex justify-content-between">
              <h4 className="sidebar-title mb-2">尋找花緒</h4>
              <button type="button" className="btn btn-primary-500 text-white" onClick={() => { setSelectCity(''), setSelectFlower('') }}>重置</button>
            </div>
            <div className="filter-group">
              <p>地區搜尋</p>
              <select
                className="form-select select-city mb-2"
                aria-label="Default select example"
                value={selectCity}
                onChange={(e) => {
                  setSelectCity(e.target.value)
                }}
              >
                <option value="">請選擇地區</option>
                {cityList.map((city, index) => { return <option value={city} key={index}>{city}</option> })}
              </select>
              <p>花種搜尋</p>
              <select
                className="form-select select-flower"
                aria-label="Default select example"
                value={selectFlower}
                onChange={(e) => {
                  setSelectFlower(e.target.value)
                }}
              >
                <option value="">請選擇花種</option>
                {flowerList.map((flower, index) => { return <option value={flower} key={index}>{flower}</option> })}
              </select>
            </div>
          </div>
          <div className="map-cardList-custom mt-3">
            <h4>花緒落點</h4>
            {flowerData.map((item, index) => {
              return (
                <div className="map-cardList mb-2" key={index}>
                  <div><img src={item.image_url} alt="花種卡片" className="flower-img" /></div>
                  <div className="card-content">
                    <h5>123</h5>
                    <div>123</div>
                  </div>
                </div>
              )
            })}
          </div>
        </aside>
        <main className="col-12 col-md-8 map-main-content">
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
