import { Header } from "./components/header/header";
import { MainContent } from "./components/main/mainContent";
import { AboutMe } from "./components/about/about_me";
export default function Home() {
	return (
		<>
			<Header/>
			<MainContent/>
			<AboutMe/>
		</>	
	);
}