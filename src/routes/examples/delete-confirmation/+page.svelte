<script lang="ts">
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
    import Hero from "$lib/hero/Hero.svelte";
    import Button from "$lib/button/Button.svelte";
    import Text from "$lib/text/Text.svelte";
	import Divider from "$lib/divider/Divider.svelte";
    import Spacer from "$lib/spacer/Spacer.svelte";
    import Modal from "$lib/modal/Modal.svelte";
    import Note from "$lib/note/Note.svelte";
    import Input from "$lib/input/Input.svelte";
    import dummyProject from "$lib/assets/dummy-project.png";
	import Center from "$lib/center/Center.svelte";
	import Code from "$lib/code/Code.svelte";
    import ChevronIcon from "$lib/icons/ChevronIcon.svelte";

    let open = false;
    let deleting = false;

    const del = () => {
        deleting = true;

        setTimeout(() => {
            deleting = false;
            open = false;
        }, 1500);
    }
</script>

<Hero exclusionHeight={79}>
    <FieldSet>
        <div class="p-2">
            <Text type="h6">Delete Project</Text>
            <Text type="small">The project will be permanently deleted, including its deployments and domains. This action is irreversible and can not be undone.</Text>
            <Spacer h={10}/>
            <Divider/>
            <Spacer h={15}/>
            <div class="flex place-items-center gap-6">
                <img src={dummyProject} alt="your project" class="rounded-md border border-gray-100 dark:border-gray-900 overflow-hidden">
                <div class="flex flex-col">
                    <Text type="small" b>echo-chamber</Text>
                    <Text type="small">Last updated 12d ago</Text>
                </div>
            </div>
        </div>
        <div slot="footer" class="flex place-items-center justify-end">
            <Button color="error-light" size="sm" on:click={() => open = true}>Delete</Button>
        </div>
    </FieldSet>
    <div class="absolute bottom-0 py-2 hidden md:flex place-items-center gap-[2px]">
        <Text type="small" color="abort"
            >See the code below <ChevronIcon size={16} rotation="90deg" /></Text>
    </div>
</Hero>

<Modal bind:visible={open} class="w-[500px] h-fit">
    <form on:submit|preventDefault={del} class="p-6 flex flex-col">
        <Text type="h4">Delete Project</Text>
        <Spacer h={15}/>
        <Text>
            This project will be deleted, along with all of its Deployments, Domains, Environment Variables, Serverless Functions, and Settings.
        </Text>
        <Spacer h={20}/>
        <Note color="error">This action is not reversible. Please be certain.</Note>
        <Spacer h={20}/>
        <Divider/>
        <Spacer h={15}/>
        <Input width="100%">
            Enter the project name <Text type="small" b>ieedan/echo-chamber</Text> to continue:
        </Input>
        <Spacer h={15}/>
        <Spacer h={5}/>
        <Input width="100%">
            To verify, type <Text type="small" b>delete my project</Text> below:
        </Input>
        <Spacer h={15}/>
        <Divider/>
        <Spacer h={15}/>
        <div class="flex place-items-center justify-between">
            <Button on:click={() => open = true}>
                Cancel
            </Button>
            <Button type="submit" color="secondary-light" loading={deleting}>
                Continue
            </Button>
        </div>
    </form>
</Modal>

<Center class="hidden md:flex ">
<Spacer h={20} />
<div class="max-w-[880px] flex justify-center">
    <Code
        lang="svelte"
        code={`<Hero exclusionHeight={79}>
    <FieldSet>
        <div class="p-2">
            <Text type="h6">Delete Project</Text>
            <Text type="small">
                The project will be permanently deleted, including its deployments and domains. 
                This action is irreversible and can not be undone.
                </Text>
            <Spacer h={10}/>
            <Divider/>
            <Spacer h={15}/>
            <div class="flex place-items-center gap-6">
                <img 
                  src={dummyProject} 
                  alt="your project" 
                  class="rounded-md border border-gray-100 dark:border-gray-900 overflow-hidden">
                <div class="flex flex-col">
                    <Text type="small" b>echo-chamber</Text>
                    <Text type="small">Last updated 12d ago</Text>
                </div>
            </div>
        </div>
        <div slot="footer" class="flex place-items-center justify-end">
            <Button color="error-light" size="sm" on:click={() => open = true}>Delete</Button>
        </div>
    </FieldSet>
    <div class="absolute bottom-0 py-2 hidden md:flex place-items-center gap-[2px]">
        <Text type="small" color="abort"
            >See the code below <ChevronIcon size={16} rotation="90deg" /></Text>
    </div>
</Hero>

<Modal bind:visible={open} class="w-[500px] h-fit">
    <form on:submit|preventDefault={del} class="p-6 flex flex-col">
        <Text type="h4">Delete Project</Text>
        <Spacer h={15}/>
        <Text>
            This project will be deleted, along with all of its Deployments, 
            Domains, Environment Variables, Serverless Functions, and Settings.
        </Text>
        <Spacer h={20}/>
        <Note color="error">This action is not reversible. Please be certain.</Note>
        <Spacer h={20}/>
        <Divider/>
        <Spacer h={15}/>
        <Input width="100%">
            Enter the project name <Text type="small" b>ieedan/echo-chamber</Text> to continue:
        </Input>
        <Spacer h={15}/>
        <Spacer h={5}/>
        <Input width="100%">
            To verify, type <Text type="small" b>delete my project</Text> below:
        </Input>
        <Spacer h={15}/>
        <Divider/>
        <Spacer h={15}/>
        <div class="flex place-items-center justify-between">
            <Button on:click={() => open = true}>
                Cancel
            </Button>
            <Button type="submit" color="secondary-light" loading={deleting}>
                Continue
            </Button>
        </div>
    </form>
</Modal>`} />
</div>
</Center>
<Spacer h={20} />