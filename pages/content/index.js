import QV from "../../UIcomponents/qv";
import { useEffect, useState } from "react";

import GroupSel from "../../UIcomponents/groupSel";
import { getLobbyDataByGroup } from "../../public/data";
import { useMainState } from "../../libs/stateHooks";
import GroupContentComponent from "./GroupContentComponent";

const Content = () => {

    const [mState, ] = useMainState()
    const group = mState.group ? mState.group : 'dos'
    const [data, setData] = useState({})

    useEffect(() => {
        setData(getLobbyDataByGroup(group))
    }, [group])

    return <QV pg="Contenido">
        <GroupSel /> 
        {Object.keys(data).map(piso => 
           <GroupContentComponent key={"Piso" + piso} data={data[piso]} piso={piso} /> 
        )}
    </QV>
}

export default Content;