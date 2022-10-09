import { Layout } from "../../components/Layout/Layout";
import {Profile} from "../../components/Profile/Profile";
import {useParams} from "react-router-dom";

export const ProfilePage = () => {

    const params = useParams()

    return (
        <Layout>
                <Profile id={params.id !== undefined ? params.id : null}/>
        </Layout>
    );
};
