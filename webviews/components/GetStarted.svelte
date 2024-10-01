<script lang="ts">
    import Logo from "../media/CCLogo.svg.svelte";
    import { onMount } from "svelte";
    import GitHub from "../media/GitHub.svg.svelte";
    import CloudEnv from "../media/cloudEnv.svg.svelte";

    let githubRepository = '';
    let githubToken = '';
    let prodEnvironmentName = '';
    let prodBranchName = '';
    let environments = [
        { envName: '', branchName: '' }
    ];
    let prodPromotionStrategy = 'release';

    function addEnvironment() {
        if (environments.length < 6) {
            environments = [...environments, { envName: '', branchName: '' }];
        }
    }

    function removeEnvironment(index: number) {
        if (environments.length > 0) {
            environments = environments.filter((_, i) => i !== index);
        }
    }

    function handleGetStartedClick() {
        tsvscode.postMessage({
            type: 'getStarted',
            payload: {
                githubRepository,
                githubToken,
                prodEnvironmentName,
                prodBranchName,
                environments,
                prodPromotionStrategy
            }
        });
    }
</script>
<style>

    .remove-button {
        padding: 0.5rem;
        min-width: 80px;
        cursor: pointer;
    }

      .env-branch-row {
        position: relative;
    }


</style>
<div
    style="
    max-width: 100rem;
    margin: auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;"
>
    <div
        style="
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;"
    >
        <div style="width:7rem;">
            <Logo />
        </div>
        <div style="font-weight: bold; font-size: x-large; padding-left: 1rem;">
            Cresting Clouds Pipelines
            <div style="padding-top:0.5rem; font-weight: normal; font-size: small;">
                <i>Streamline your Salesforce development workflow with seamless CI/CD integration right in your editor.</i>
            </div>
        </div>
    </div>

    <div class="test" style="padding-top: 1rem; font-weight: bold; font-size: large;">
        Quick Start Guide
    </div>

    <div style="padding-top: 0.5rem;">
        To get you started, we'll need some information. All fields are required. Rest assured that any tokens provided will be securely stored locally and used exclusively for integration purposes.
    </div>

    <div style="padding-top: 2rem; display: flex; flex-direction: column;">
        <form on:submit|preventDefault={handleGetStartedClick} style="width: 100%">
            <div style="display: flex; flex-direction: row; align-items: center; margin-bottom: 1rem;">
                    <GitHub/> 
                <div style="padding-left: 1rem;">
                    GitHub Integration
                </div>

            </div>
              <div
                    style="
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: 2rem;
                    justify-content: space-between;
                    padding-inline: 2rem;"
                    
                >
              
                
                    <div style="margin-bottom: 1rem; width: 45%;">
                        <label>
                            <strong>Repository URL:</strong>
                            <input
                                type="text"
                                bind:value={githubRepository}
                                required
                                placeholder="e.g., user/repo"
                                style="width: 100%; padding: 0.5rem; margin-top: 0.5rem;"
                            />
                        </label>
                    </div>
                    <div style="margin-bottom: 1rem;  width: 45%;">
                        <label>
                            <strong>Classic User Token:</strong>
                            <input
                                type="password"
                                bind:value={githubToken}
                                required
                                style="width: 100%; padding: 0.5rem;margin-top: 0.5rem;"
                            />
                        </label>
                    </div>
              </div>
            <div style="display: flex; flex-direction: row; align-items: center; margin-bottom: 1rem;">
                     <CloudEnv/> 
                    <div style="padding-left: 1rem;">
                        Environments and Branches
                    </div>

                </div>
            <div
                    style="
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: 0.5rem;
                    justify-content: space-between;
                    padding-inline: 2rem;"

                >
                <div style="margin-bottom: 1rem;  width: 45%;">
                    <label>
                        <strong>Production Environment Name:</strong>
                        <input
                            type="text"
                            bind:value={prodEnvironmentName}
                            required
                            style="width: 100%; padding: 0.5rem; margin-top: 0.5rem;"
                        />
                    </label>
                </div>
                <div style="margin-bottom: 1rem; width: 45%;">
                    <label>
                        <strong>Production Branch Name:</strong>
                        <input
                            type="text"
                            bind:value={prodBranchName}
                            required
                            style="width: 100%; padding: 0.5rem; margin-top: 0.5rem;"
                        />
                    </label>
                </div>

              

            </div>
            


            {#each environments as env, index}
              {#if index > 0}

                <div
                class="env-branch-row"
                    style="
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: 0.5rem;
                    justify-content: space-between;
                    padding-inline: 2rem;
                    margin-top:2rem"
                >
                    <div style="margin-bottom: 1rem;  width: 45%;">
                        <input
                            type="text"
                            bind:value={env.envName}
                            required
                            placeholder="Environment Name"
                            style="width: 100%; padding: 0.5rem;"
                        />
                    </div>
                    <div style="margin-bottom: 1rem;  width: 45%;  display: flex;
                    flex-direction: row;">
                        <input
                            type="text"
                            bind:value={env.branchName}
                            required
                            placeholder="Branch Name"
                            style="width: 100%; padding: 0.5rem;"
                        />
                        {#if environments.length > 0}
                          <div style="padding-left: 1rem;">
                            <button
                                type="button"
                                on:click={() => removeEnvironment(index)}
                                class="remove-button"
                            >
                                Remove
                            </button>
                            </div>
                        {/if}
                    </div>

                </div>
                {/if}
            {/each}

            {#if environments.length < 6}
                <div style="    
                    margin-bottom: 1rem;
                    margin-top: 1rem;
                    width: 13rem;
                    margin-left: calc(100% - 13rem);
                    padding-inline: 2rem;">
                    <button
                        type="button"
                        on:click={addEnvironment}
                        style="padding: 0.5rem; cursor: pointer;"
                    >
                        Add Environment
                    </button>
                </div>
            {/if}

            <div style="margin-bottom: 1rem;">
                <label>
                    <strong>Production Promotion Strategy:</strong>
                    <select
                        bind:value={prodPromotionStrategy}
                        required
                        style="width: 100%; padding: 0.5rem; margin-top: 0.5rem;"
                    >
                        <option value="release">Release Branch</option>
                        <option value="continuous">Continuous Delivery</option>
                    </select>
                </label>
            </div>

            <div style="margin-top: 1.5rem;">
                <button
                    type="submit"
                    style="
                    width: 100%;
                    padding: 1rem;
                    background-color: #007acc;
                    color: white;
                    border: none;
                    font-size: large;
                    cursor: pointer;"
                >
                    Get Started
                </button>
            </div>
        </form>
    </div>
</div>