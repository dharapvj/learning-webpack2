// below line is not required anymore due to provide plugin.
// import * as $ from 'jquery';

class jqueryDepModule {
    constructor() {
        $(document).ready( () => {
            console.log( "ready!" );
        });
    }
}

export default jqueryDepModule;