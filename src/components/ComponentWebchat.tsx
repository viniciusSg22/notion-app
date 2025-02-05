import { Webchat, WebchatProvider, useClient } from "@botpress/webchat";
import { theme } from "../themes/webchatTheme";
import '../index.css';

const clientId = import.meta.env.BOTPRESS_CLIENT_ID;

export default function ComponentWebchat() {
    const client = useClient({ clientId });

    return (
        <div>
            <WebchatProvider theme={theme} client={client}>
                <Webchat />
            </WebchatProvider>
        </div>
    );
}
