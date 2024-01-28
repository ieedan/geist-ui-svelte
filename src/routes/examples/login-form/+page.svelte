<script lang="ts">
	import Hero from "$lib/hero/Hero.svelte";
	import Divider from "$lib/divider/Divider.svelte";
	import Input from "$lib/input/Input.svelte";
	import Text from "$lib/text/Text.svelte";
	import Center from "$lib/center/Center.svelte";
	import Button from "$lib/button/Button.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Checkbox from "$lib/checkbox/Checkbox.svelte";
	import GithubIcon from "$lib/icons/GithubIcon.svelte";
	import googleIcon from "$lib/assets/google.svg";
	import favicon from "$lib/assets/favicon.svg";
	import Link from "$lib/link/Link.svelte";
	import Code from "$lib/code/Code.svelte";
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
</script>

<svelte:head>
	<title>Login Form - Examples - geist-ui-svelte</title>
</svelte:head>

<Hero exclusionHeight={89} class="sm:px-20 relative">
	<div
		class="flex justify-between border-transparent sm:border-gray-100
        sm:dark:border-gray-900 py-6 sm:border max-w-[350px] w-full
        md:max-w-[600px] h-96 px-8 rounded-xl md:rounded-3xl">
		<form
			action=""
			on:submit|preventDefault
			class="flex-grow w-full flex flex-col place-items-start justify-center">
			<Input type="email" placeholder="Email" width="100%">
				<Text type="small" color="secondary">Email</Text>
			</Input>
			<Spacer h={5} />
			<Input type="password" placeholder="Password" width="100%">
				<Text type="small" color="secondary">Password</Text>
			</Input>
			<Spacer h={15} />
			<div class="flex place-items-center justify-between w-full">
				<Checkbox ring color="success">
					<Text type="small" color="secondary">Remember me</Text>
				</Checkbox>
				<Text type="small">
					<Link to="/examples/login-form" color>Forgot password?</Link>
				</Text>
			</div>
			<Spacer h={15} />
			<Button type="submit" width="100%" color="success-light">Continue</Button>
			<Spacer h={30} />
			<Divider label="Or continue with" />
			<Spacer h={10} />
			<div class="flex place-items-center w-full gap-2">
				<Button width="100%">
					<div class="flex place-items-center gap-2">
						<GithubIcon size={16} />
						Github
					</div>
				</Button>
				<Button width="100%">
					<div class="flex place-items-center gap-2">
						<img src={googleIcon} width="16" height="16" alt="google" />
						Google
					</div>
				</Button>
			</div>
		</form>
		<div class="md:flex w-full flex-grow hidden">
			<Spacer w={75} />
			<Divider vertical width="1px" />
			<Spacer w={75} />
			<Center class="flex-grow w-full flex flex-col gap-2">
				<img
					src={favicon}
					alt="geist-ui-svelte logo"
					height="50"
					width="50"
					class="border border-transparent dark:border-gray-900 rounded-full" />
				<Text type="h1" align="center" size="2xl" lgSize="3xl">Sign into your account</Text>
			</Center>
		</div>
	</div>
	<div class="absolute bottom-0 py-2 hidden md:flex place-items-center gap-[2px]">
		<Text type="small" color="abort"
			>See the code below <ChevronIcon size={16} rotation="90deg" /></Text>
	</div>
</Hero>
<Center class="hidden md:flex ">
	<Spacer h={20} />
	<div class="max-w-[880px] flex justify-center">
		<Code
			lang="svelte"
			code={`<div
    class="flex justify-between border-transparent sm:border-gray-100
    sm:dark:border-gray-900 py-6 sm:border max-w-[350px] w-full
    md:max-w-[600px] h-96 px-8 rounded-xl md:rounded-3xl">
    <form
        action=""
        on:submit|preventDefault
        class="flex-grow w-full flex flex-col place-items-start justify-center">
        <Input type="email" placeholder="Email" width="100%">
            <Text type="small" color="secondary">Email</Text>
        </Input>
        <Spacer h={5} />
        <Input type="password" placeholder="Password" width="100%">
            <Text type="small" color="secondary">Password</Text>
        </Input>
        <Spacer h={15} />
        <div class="flex place-items-center justify-between w-full">
            <Checkbox ring color="success">
                <Text type="small" color="secondary">Remember me</Text>
            </Checkbox>
            <Text type="small">
                <Link to="/examples/login-form" color>Forgot password?</Link>
            </Text>
        </div>
        <Spacer h={15} />
        <Button type="submit" width="100%" color="success-light">Continue</Button>
        <Spacer h={30} />
        <Divider label="Or continue with" />
        <Spacer h={10} />
        <div class="flex place-items-center w-full gap-2">
            <Button width="100%">
                <div class="flex place-items-center gap-2">
                    <GithubIcon size={16} />
                    Github
                </div>
            </Button>
            <Button width="100%">
                <div class="flex place-items-center gap-2">
                    <img src={googleIcon} width="16" height="16" alt="google" />
                    Google
                </div>
            </Button>
        </div>
    </form>
	<div class="md:flex w-full flex-grow hidden">
		<Spacer w={75} />
		<Divider vertical width="1px" />
		<Spacer w={75} />
		<Center class="flex-grow w-full flex flex-col gap-2">
			<img
				src={favicon}
				alt="geist-ui-svelte logo"
				height="50"
				width="50"
				class="border border-transparent dark:border-gray-900 rounded-full" />
			<Text type="h1" align="center" size="2xl" lgSize="3xl">Sign into your account</Text>
		</Center>
	</div>
</div>`} />
	</div>
</Center>
<Spacer h={20} />
