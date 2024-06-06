import { routeConstant } from "./routeConstant";
interface ButtonType {
  title: string
  link: string
}
interface Buttons {
  private: ButtonType[]
  public: ButtonType[]
}
export const buttons: Buttons = {
  private: [
    { title: 'Home', link: routeConstant.HOME },
    { title: 'Feed', link: routeConstant.FEED },
    { title: 'Profile', link: routeConstant.PROFILE },
  ],

  public: [
    { title: 'Register', link: routeConstant.REGISTER },
    { title: 'Login', link: routeConstant.LOGIN },
  ],
}