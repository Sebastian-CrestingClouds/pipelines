<script lang="ts">
    import Logo from "../media/CCLogo.svg.svelte";
    import Github from "../media/GitHub.svg.svelte";
    import Rocket from "../media/Rocket.svg.svelte";


    function handleGetStartedClick() {
        tsvscode.postMessage({
        type: 'getStarted'
        });
    }
    
</script>

<div style="position: relative; width: 100%; height: 5rem;">
    <div style="width:5rem; position: absolute; margin: auto; left: 0; right: 0; top: 0; bottom: 0;">
        <Logo/>
    </div>
</div>

<div style="text-align: center; font-weight: bold; font-size: medium;">
    Cresting Clouds Pipelines
</div>

<div style="  text-align: center"> 
    The only Salesforce CI/CD solution you’ll ever need.
</div>

   
    <button
    on:click={handleGetStartedClick}
    style="
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;">
        Get Started 
            <div style="padding-left: 1rem">
                <Rocket/>
            </div>
    </button>


<div style="width:100%; position: relative; margin-top: 2rem;">
    <div style="width:50%; position: absolute; margin: auto; left: 0; right: 0; top: 0; bottom: 0; border-bottom: 1px solid #ccc;"/>
</div>
