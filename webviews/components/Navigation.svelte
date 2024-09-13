<script lang="ts">
    import Home from "../media/Home.svg.svelte";
    import Gear from "../media/Gear.svg.svelte";
    import Account from "../media/Account.svg.svelte";
    import Logo from "../media/CCLogo.svg.svelte";
</script>   

<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; margin-top: 2rem;">
    <div style="display: flex; align-items: center; justify-content: center; width: 2rem;">
        <Logo/>
    </div>
    <div style="display: flex; flex-direction: row">
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
  
        <Account/>
        
</a>

    </div>
   


</div>