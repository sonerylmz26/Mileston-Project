import axios from "axios"
import { toastErrorNotify, toastSuccess, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice"

const useAuthCalls = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = async (userData) => {


    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `https://32326.fullstack.clarusway.com/users/auth/login/`,
        userData
      )
      dispatch(loginSuccess(data))
      toastSuccess("login islemi basarili")
      navigate("/dashboard")
    } catch (error) {
      console.log(error.message)
      dispatch(fetchFail())
      toastErrorNotify(error.response.data.non_field_errors[0])
    }
  }

  const logout = async () => {
    dispatch(fetchStart())
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/logout/`)
      dispatch(logoutSuccess())
      toastSuccessNotify("logout islemi basarili")
      navigate("/")
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify("Logout islemi basarisiz")
    }
  }

  const register = async (userData) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/register/`,
        userData
      )
      dispatch(registerSuccess(data))
      toastSuccessNotify("kayit islemi basarili")
      navigate("/stock")
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify("Kayit islemi basarisiz olmustur.")
    }
  }

  return { login, logout, register }
}

export default useAuthCalls
