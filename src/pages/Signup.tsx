import signupImg from '../assets/Img_signup.svg'
import { Auth } from '../components/Auth'
import { ImgPanel } from '../components/ImgPanel'

export const Signup = ()=>{
    return (
        <div className="flex h-screen">
            <Auth type="signup"></Auth>
            <ImgPanel src = {signupImg}></ImgPanel>
        </div>
    )
}