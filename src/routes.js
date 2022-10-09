import { Route, Routes } from "react-router-dom";
import {ProfilePage} from "./pages/ProfilePage/ProfilePage";
import {AchievementsPage} from "./pages/AchievementsPage/AchievementsPage";
import {MainPage} from "./pages/MainPage/MainPage";
import {SignUpPage} from "./pages/AuthPage/SignUpPage";
import {SignInPage} from "./pages/AuthPage/SignInPage";
import {TransferPage} from "./pages/TransferPage/TransferPage";
import {NftDetailsPage} from "./pages/NftDetailsPage/NftDetailsPage";
import {ChoosePage} from "./pages/ChoosePage/ChoosePage";

export const useRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />}/>
			<Route path="/sign-up" element={<SignUpPage />}/>
			<Route path="/sign-in" element={<SignInPage />}/>
			<Route path="/profile" element={<ProfilePage/>}>
				<Route path=":id" element={<ProfilePage/>}/>
			</Route>
			<Route path="/achievements" element={<AchievementsPage/>}/>
			<Route path="/transfer" element={<TransferPage />}/>
			<Route path="/nft-details/:id" element={<NftDetailsPage />}/>
			<Route path="/choose" element={<ChoosePage />}/>
		</Routes>
	)
}
