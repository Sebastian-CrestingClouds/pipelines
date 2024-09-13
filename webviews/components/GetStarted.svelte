<script lang="ts">
    import Logo from "../media/CCLogo.svg.svelte";
    import Github from "../media/GitHub.svg.svelte";
    import Home from "../media/Home.svg.svelte";
    import Rocket from "../media/Rocket.svg.svelte";
    import Youtube from "svelte-youtube-embed";


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
        Cresting Clouds
            <div style="padding-top:0.5rem; font-weight: normal; font-size: small;"> 
                Salesforce CICD made easy.
            </div>
        </div>
        
    </div>
    <div style="padding-top: 0.5rem;">
        At Cresting Clouds, our mission is to simplify and streamline the Salesforce development lifecycle. We believe in empowering teams to deliver faster, safer, and more efficient releases.
    </div>

    <div style="padding-top: 1rem; font-weight: bold; font-size: large;">
        Why Cresting Clouds Pipelines?
    </div>

    <div  style="padding-top: 0.5rem; display: flex; flex-direction: row; justify-content: flex-start; align-items: flex-start;">
        <div>
            Cresting Pipelines was born out of the need to bridge the gaps between Salesforce developers, modern DevOps and rapidly changing business needs. We believe in removing bottlenecks that slow down your team, reduce the lag time that often delays progress. Fast, automated, and no idle time—just continuous delivery.

        </div>
        <Youtube id="q2Y3f0lHnMs" />
        
    </div>



</div>