import Dashboard from "./DashboardPage";
import Projects from "./ProjectsPage";
import NewProject from "./NewProjectPage";

export default class Pages {
    I: CodeceptJS.I;

    constructor(I: CodeceptJS.I) {
        this.I = I;
    }

    getDashboardPage() {
        return new Dashboard(this.I);
    }

    getProjectPage() {
        return new Projects(this.I);
    }

    getNewProjectPage() {
        return new NewProject(this.I);
    }
}