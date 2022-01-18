

const initialState = {
    client: undefined
};

export default function chatReducer(state = initialState, action: any) {
    switch (action.type) {
        case "chat/connected":
            return {
                ...state,
                client: action.payload,
            }
        default:
            return state;
    }
};

export async function sendChat(code: string, name?: string) {
    //client.say(0,"!pcb ");
}