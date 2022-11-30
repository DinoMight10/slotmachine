import React from "react";
import Slot from "./Slot_machine";

const App=()=>{
    return(
        <>
        <h1>🎰!!!WELCOME TO THE SLOT MACHINE GAME!!!🎰</h1>
        <div className="Abhi">
            <Slot a="😀" b="😀" c="😀"/>
            <Slot a="😡" b="😢" c="👿"/>
            <Slot a="🦖" b="🦖" c="🦖"/>
            <Slot a="💩" b="💩" c="💩"/>
            <Slot a="😂" b="🤐" c="😖"/>
            <Slot a="🤑" b="🤑" c="🤑"/>
            <Slot a="😡" b="😠" c="👿"/>
            <Slot a="💵" b="💵" c="💵"/>
            <Slot a="❤️" b="💑" c="💔"/>
            <Slot a="💷" b="💴" c="💶"/>
        </div>
        </>
    )
}

export default App;