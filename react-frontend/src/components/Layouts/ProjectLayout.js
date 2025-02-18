import AppSideBar from './appSideBar/AppSideBar.js';

/*

import ProductsPage from "../ProductsPage/ProductsPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import LocalePage from "../LocalePage/LocalePage";
import PasswordPolicyPage from "../PasswordPolicyPage/PasswordPolicyPage";
import CloudProvidersPage from "../CloudProvidersPage/CloudProvidersPage";
import HighAvailabilityPage from "../HighAvailabilityPage/HighAvailabilityPage";
import LoginPolicyPage from "../LoginPolicyPage/LoginPolicyPage";
import LoginTimePage from "../LoginTimePage/LoginTimePage";
import LoginBlockedPage from "../LoginBlockedPage/LoginBlockedPage";
import ThemePage from "../ThemePage/ThemePage";
import SharingPage from "../SharingPage/SharingPage";
import FigmaPage from "../FigmaPage/FigmaPage";
import DomainsPage from "../DomainsPage/DomainsPage";
import EnvironmentsPage from "../EnvironmentsPage/EnvironmentsPage";
import GitRepositoriesPage from "../GitRepositoriesPage/GitRepositoriesPage";
import FirebasePage from "../FirebasePage/FirebasePage";
import MobileAppPage from "../MobileAppPage/MobileAppPage";
import IOtAppPage from "../IOtAppPage/IOtAppPage";
import BackendAppsPage from "../BackendAppsPage/BackendAppsPage";
import FrontendAppsPage from "../FrontendAppsPage/FrontendAppsPage";
import DisasterRecoveryPage from "../DisasterRecoveryPage/DisasterRecoveryPage";
import DatabaseAppsPage from "../DatabaseAppsPage/DatabaseAppsPage";
import GenAiAppPage from "../GenAiAppPage/GenAiAppPage";
import PagesPage from "../PagesPage/PagesPage";
import CartsPage from "../CartsPage/CartsPage";
import ApisPage from "../ApisPage/ApisPage";
import WorkflowsPage from "../WorkflowsPage/WorkflowsPage";
~cb-add-import~

~cb-add-services-card~

case "products":
                return <ProductsPage />;
case "projects":
                return <ProjectsPage />;
case "locale":
                return <LocalePage />;
case "passwordPolicy":
                return <PasswordPolicyPage />;
case "cloudProviders":
                return <CloudProvidersPage />;
case "highAvailability":
                return <HighAvailabilityPage />;
case "loginPolicy":
                return <LoginPolicyPage />;
case "loginTime":
                return <LoginTimePage />;
case "loginBlocked":
                return <LoginBlockedPage />;
case "theme":
                return <ThemePage />;
case "sharing":
                return <SharingPage />;
case "figma":
                return <FigmaPage />;
case "domains":
                return <DomainsPage />;
case "environments":
                return <EnvironmentsPage />;
case "gitRepositories":
                return <GitRepositoriesPage />;
case "firebase":
                return <FirebasePage />;
case "mobileApp":
                return <MobileAppPage />;
case "iOtApp":
                return <IOtAppPage />;
case "backendApps":
                return <BackendAppsPage />;
case "frontendApps":
                return <FrontendAppsPage />;
case "disasterRecovery":
                return <DisasterRecoveryPage />;
case "databaseApps":
                return <DatabaseAppsPage />;
case "genAiApp":
                return <GenAiAppPage />;
case "pages":
                return <PagesPage />;
case "carts":
                return <CartsPage />;
case "apis":
                return <ApisPage />;
case "workflows":
                return <WorkflowsPage />;
~cb-add-thurthy~

*/

const AppLayout = (props) => {
    const { children, activeKey, activeDropdown } = props;

    return (
        <div className="flex min-h-[calc(100vh-5rem)] mt-20 bg-white">
            <AppSideBar activeKey={activeKey} activeDropdown={activeDropdown} />
            <div className="flex-1 ml-2">{children}</div>
        </div>
    );
};

export default AppLayout;
