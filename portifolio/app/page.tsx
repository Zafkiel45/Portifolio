import { Header } from "./components/header/header";
import { MainContent } from "./components/main/mainContent";
import { AboutMe } from "./components/about/about_me";
import { Tecnologie } from "./components/tecnologies/tecnologie_section";
import { Project } from "./components/projects/project_container";
import { Contact } from "./components/contact/contact_section";
import { Footer } from "./components/footer/footer_section";
import { Providers } from "./providers";

export default function Home() {
	return (
		<>
			<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
				<Header/>
				<MainContent/>
				<AboutMe/>
				<Tecnologie/>
				<Project/>
				<Contact/>
				<Footer/>
			</Providers>
		</>	
	);
}
