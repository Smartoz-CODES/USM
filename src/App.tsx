import { StoreProvider } from "./providers/store-provider";
import { PageRoutes } from "./routes/pages";

const App = () => {
    return (
        <StoreProvider>
            <PageRoutes />
        </StoreProvider>
    );
};

export default App;