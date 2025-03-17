import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allApi'

const View = ({uploadVideoStatus}) => {

  const [deleteStatus,setDeleteStatus]=useState({
  })

  const [allVideos, setAllVideos] = useState([])
  const getVideos = async () => {
    const resp = await getAllVideos();
    const { data } = resp;
    setAllVideos(data)



  }

  useEffect(() => {
    
    getVideos()
  }, [uploadVideoStatus,deleteStatus])



  return (
    <>
      <Row>
        {
          allVideos?.map(item => (
            <Col sm={12} md={16} lg={4} xl={3}>
              <VideoCard displayVideo={item} setDeleteStatus={setDeleteStatus} />
            </Col>
          ))
        }

      </Row>
    </>
  )
}

export default View