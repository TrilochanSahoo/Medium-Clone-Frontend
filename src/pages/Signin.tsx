import signinImg from '../assets/Img_signin.svg'
import { Auth } from '../components/Auth'
import { ImgPanel } from '../components/ImgPanel'

export const Signin = ()=>{
    return (
        <div className="flex h-screen">
            <ImgPanel src = {signinImg}></ImgPanel>
            <Auth type="signin"></Auth>
        </div>
    )
}