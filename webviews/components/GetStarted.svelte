<script lang="ts">
    import Logo from "../media/CCLogo.svg.svelte";
    import Github from "../media/GitHub.svg.svelte";
    import Home from "../media/Home.svg.svelte";
    import Rocket from "../media/Rocket.svg.svelte";


    function handleGetStartedClick() {
        tsvscode.postMessage({
        type: 'getStarted'
        });
    }
</script>
<div 
    style="
    max-width: 100rem;
    margin: auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;">

    <div 
        style="
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;">
        <div style="width:7rem;">
            <Logo/>
        </div>
            <div style="font-weight: bold; font-size: x-large;">
        Cresting Pipelines
        </div>
    </div>


</div>