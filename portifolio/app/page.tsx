import { Header } from "./components/header/header";
import { MainContent } from "./components/main/mainContent";
import { AboutMe } from "./components/about/about_me";
import { Tecnologie } from "./components/tecnologies/tecnologie_section";
import { Project } from "./components/projects/project_container";

export default function Home() {
	return (
		<>
			<Header/>
			<MainContent/>
			<AboutMe/>
			<Tecnologie/>
			<Project/>
		</>	
	);
}
