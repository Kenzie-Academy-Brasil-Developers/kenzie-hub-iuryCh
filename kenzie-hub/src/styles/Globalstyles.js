import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`

    :root {
        
        /* Primary Palette */
        --Color-primary: #FF577F;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;

        /* Grey Scale Palette */
        --Grey-4: #121214;
        --Grey-3: #212529;
        --Grey-2: #343B41;
        --Grey-1: #868E96;
        --Grey-0: #F8F9FA;

        /* Feedback Palette */
        --Success: #3FE864;
        --Negative: #E83F5B;

        /* Typography */
        --Title-18: 700 1.125rem "Inter", sans-serif;
        --Title-16: 600 1rem "Inter", sans-serif;
        --Title-14: 700 .875rem "Inter", sans-serif;
        --Title-12: 700 .75rem "Inter", sans-serif;
        --Headline-bold: 700 .75rem "Inter", sans-serif;
        --Headline-regular-16: 400 1rem "Inter", sans-serif;
        --Headline-regular-12: 400 .75rem "Inter", sans-serif;
        --Headline-italic: italic 400 .75rem "inter", sans-serif;

        --base-radius: 4px;
    }
    
    body{
        background-color: var(--Grey-4);
    }

    button{
        cursor: pointer;            
        border-radius: var(--base-radius);
    }

`;

export default Globalstyles;
