import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
// import { Details } from '@mui/icons-material'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const { id } = useParams()
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/video/related'
      const exercisesDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exercisesDetailData)
    }
    fetchExercisesData()
  }, [id])
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail