<script lang="ts">
    import Logo from "../media/CCLogo.svg.svelte";
    import Github from "../media/GitHub.svg.svelte";
    import Home from "../media/Home.svg.svelte";
    import Rocket from "../media/Rocket.svg.svelte";
    import Gear from "../media/Gear.svg.svelte";
    import Account from "../media/Account.svg.svelte";
    import PROpen from "../media/PROpen.svg.svelte";
    import { onMount } from "svelte";
  import GitHub from "../media/GitHub.svg.svelte";
  import Check from "../media/Check.svg.svelte";
  import Cross from "../media/Cross.svg.svelte";
  import Milestone from "../media/Milestone.svg.svelte";
  import Commit from "../media/Commit.svg.svelte";
  import Comment from "../media/Comment.svg.svelte";
  import Reviewers from "../media/Reviewers.svg.svelte";
  import Test from "../media/Test.svg.svelte";
  import Run from "../media/Run.svg.svelte";
  import Pass from "../media/Pass.svg.svelte";
  import Node from "../media/Node.svg.svelte";
  import Tag from "../media/Tag.svg.svelte";

    let userName: string | undefined;
    let userEmail: string | undefined;
    let picture: string | undefined;
    let role: string | undefined;

    onMount(async () => {
        window.addEventListener("message", (event) => {
            if (event.data.type === "session") {
                console.log("Received session from extension", event.data.value);
                userName = event.data.value.name;
                userEmail = event.data.value.email;
                picture = event.data.value.picture;
                role = event.data.value.role;
            }
        });
        tsvscode.postMessage({type: 'getSession'});
    });

    




    function handleGetStartedClick() {
        tsvscode.postMessage({
        type: 'getStarted'
        });
    }


</script>

<style>

</style>
<div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 2rem;">
    <a href="/"
    class="buttonIcon"
    style="
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0.3rem;    
    ">
    <Home/>
</a>
<a href="/"
    class="buttonIcon"
    style="
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0.3rem;    
    ">
    <Gear/>
</a>
<a href="/"
    class="buttonIcon"
    style="
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0.3rem;    
    ">
    {#if picture}
        <img src={picture} alt="profile picture" style="width:1.8rem; border-radius: 50%;"/>

    {:else}
        <Account/>
        
    {/if}
</a>


</div>

{#if userName}
        <div style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; margin-top: 2rem;">
            <GitHub/>
            <div style="font-weight: bold; font-size: medium; padding-left: 0.5rem;">
                My Pull Requests
            </div>
        </div>

      
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 2rem;">
<div 
    style="
    width: 100%; 
    background-color: var(--vscode-commandCenter-background);
    border: 1px solid var(--vscode-commandCenter-border);
    border-radius: 6px;
    color: var(--vscode-commandCenter-foreground);
    padding: 0.5rem;">

    <div style="display: flex; flex-direction: row; align-items: center;">
        <div style="color: var(--vscode-charts-green);">
            <PROpen/>
        </div>
        <div>
             <div style="display: flex; flex-direction: column; padding-left: 0.5rem;">
             <div style="display: flex; flex-direction: row; align-items: center;">
            <a href="/" style="flex-grow:1;">
                #211
            </a>
             
            
            </div>
            <div style="
                font-weight: bold;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                max-width: 250px;">
                US-12345 Allow Users to Create and Edit Records
            </div>
           
           
        </div>

        </div>
       
    </div>
<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: flex-start;">
      <div style="display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;">
         <div style="display: flex; flex-direction: row; align-items: center; padding-top: 1rem;padding-left:0.5rem;">
            <div style="width: 1.5rem;">
                <Milestone/>
            </div>
            <div style="font-weight: bold;">
                QA
            </div>
            <div style="width: 1.5rem; color: var(--vscode-charts-green); padding-left: 0.5rem; flex-grow: 1;">
                <Check/>
            </div>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; padding-top: 1rem;padding-left:0.5rem;">
            <div style="width: 1.5rem;">
                <Rocket/>
            </div>
            <div >
                No Deployments yet
            </div>
        </div>
    </div>
    <div style="display: flex; flex-direction: row; justify-content: flex-end;">
    <div style="
        margin-top: 1rem;
        width: fit-content;
        border-radius: 2rem; 
        border: 1px solid;
        padding: 3px 10px;
        color: hsl(var(--label-h), calc(var(--label-s) * 1%), calc((var(--label-l) + calc(((0.6 - calc( ((var(--label-r) * 0.2126) + (var(--label-g) * 0.7152) + (var(--label-b) * 0.0722)) / 255 )) * 100) * max(0, min(calc((1/(0.6 - calc( ((var(--label-r) * 0.2126) + (var(--label-g) * 0.7152) + (var(--label-b) * 0.0722)) / 255 )))), 1)))) * 1%));
        background: rgba(var(--label-r), var(--label-g), var(--label-b), var(--background-alpha));
        border-color: hsla(var(--label-h), calc(var(--label-s) * 1%), calc((var(--label-l) + calc(((0.6 - calc( ((var(--label-r) * 0.2126) + (var(--label-g) * 0.7152) + (var(--label-b) * 0.0722)) / 255 )) * 100) * max(0, min(calc((1/(0.6 - calc( ((var(--label-r) * 0.2126) + (var(--label-g) * 0.7152) + (var(--label-b) * 0.0722)) / 255 )))), 1)))) * 1%), 0.3);
        --label-r: 0;
        --label-g: 82;
        --label-b: 204;
        --label-h: 215;
        --label-s: 100;
        --label-l: 40;
        --background-alpha: 0.18;">
        Ready to Merge
    </div>

</div>

</div>
  
   


    

       <div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start; padding-top: 1rem;border-top: 1px solid var(--vscode-commandCenter-border); margin-top: 0.5rem; ">
          
                <div style="color: var(--vscode-charts-yellow);padding-left: 0.5rem;font-size: smaller; flex-grow: 1;">
                Review Required
            </div>
              <div style="width: 1.5rem;">
            <Run/>
            </div>
                <div style="width: 1.5rem;">
            <Tag/>
            </div>
            <div style="width: 1.5rem;">
                <Test/>
            </div>
            <div style="width: 1.5rem;">
                <Commit/>
            </div>
            <div style="width: 1.5rem;">
                <Comment/>
            </div>
            <div style="width: 1.5rem;">
                <Reviewers/>
            </div>
            
        </div>
   
    

</div>

           
            
        </div>

           <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 2rem;">
            <div 
            style="
            width: 100%; 
            background-color: var(--vscode-commandCenter-background);
            border: 1px solid var(--vscode-commandCenter-border);
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            color: var(--vscode-commandCenter-foreground);">

                <div    style="display: flex; flex-direction: column; justify-content: space-between; align-items: felx-start; padding: 0.5rem;">
                    <div style="display: flex; flex-direction: row; justify-content: flex-start; align-items: end;">
                        <div style="width: 1.5rem; color: var(--vscode-charts-green);">
                            <PROpen/>
                        </div>
                        <a href="/" style="font-weight: bold; font-size: medium; padding-left: 0.5rem; padding-bottom: 0.1rem;">
                            #211
                        </a>
                         <div style="width: 1.5rem; color: var(--vscode-charts-red);  padding-left: 0.5rem">
                            <Cross/>
                        </div>
                        
                    </div>
                    <div style="padding-top: 0.5rem;">
                        US-12342 Yet Another PR
                    </div>
                    <div style="
                        margin-top: 1rem;
                        width: fit-content;
                        border-radius: 2rem; 
                        border: 1px solid;
                        padding: 3px 10px;
                        color: hsl(var(--label-h), calc(var( --label-s) * 1%), calc((var(--label-l) + calc(((0.6 - calc( ((var(--label-r) * 0.2126) + (var(--label-g) * 0.7152) + (var(--label-b) * 0.0722)) / 255 )) * 100) * max(0, min(calc((1/(0.6 - calc( ((var(--label-r) * 0.2126) + (var(--label-g) * 0.7152) + (var(--label-b) * 0.0722)) / 255 )))), 1)))) * 1%));
                        background: rgba(var(--label-r), var(--label-g), var(--label-b), var(--background-alpha));
                        border-color: hsla(var(--label-h), calc(var(--label-s) * 1%), calc((var(--label-l) + calc(((0.6 - calc( ((var(--label-r) * 0.2126) + (var(--label-g) * 0.7152) + (var(--label-b) * 0.0722)) / 255 )) * 100) * max(0, min(calc((1/(0.6 - calc( ((var(--label-r) * 0.2126) + (var(--label-g) * 0.7152) + (var(--label-b) * 0.0722)) / 255 )))), 1)))) * 1%), 0.3);
                        --label-r: 100;
                        --label-g: 213;
                        --label-b: 103;
                        --label-h: 78;
                        --label-s: 0;
                        --label-l: 80;
                        --background-alpha: 0.18;">
                        Ready to Review
                    </div>

                </div>

                
            </div>

           
            
        </div>


{:else}
<div style="position: relative; width: 100%; height: 5rem;">
    <div style="width:5rem; position: absolute; margin: auto; left: 0; right: 0; top: 0; bottom: 0;">
        <Logo/>
    </div>
</div>

<div style="text-align: center; font-weight: bold; font-size: medium;">
    Wellcome to Cresting Pipelines!
</div>

<div style="padding-bottom:2rem;  text-align: center"> 
    The more complete Salesforce CICD solution.
</div>

<div style="font-style: italic;">
    Watch introductory videos, learn the first steps, and see how Cresting Pipelines can revolutionize your workflow.
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


      <button 
        style="
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
         margin-top: 5rem;">
        Login 
        <div style="padding-left: 1rem"><Github/></div></button>
{/if}







  