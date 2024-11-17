<template>
  <div class="flex h-full">
    <div class="flex flex-col m-auto  w-full max-w-lg">
      <h2 class="text-xl font-bold text-center">
        {{ $t('contact.contactAppsHeader') }}
        <BaseGradientLine class="mt-1 mb-3" />
      </h2>
      <div class="mt-3 flex flex-row justify-evenly">
        <a href="https://www.linkedin.com/in/edwinbaumann/" target="_blank">
          <Icon size="3.5rem" name="devicon:linkedin" />
        </a>
      </div>

      <h2 class="mt-20 text-xl font-bold text-center">
        {{ $t('contact.contactFormHeader') }}
      </h2>
      <BaseGradientLine class="mt-1 mb-3" />

      <form
        id="contact-form"
        class="flex flex-col w-[90%] m-auto"
        action="/send-mail.php"
        method="post"
      >
        <label class="hide-label" for="email"> {{ $t('contact.labelEmail') }}</label>
        <input
          id="email"
          name="email"
          class="hide-label"
          type="email"
          placeholder="E-Mail"
          autocomplete="new-password"
        >

        <label class="mb-1 font-bold" for="name">{{ $t('contact.labelName') }}</label>
        <input
          id="name"
          name="name"
          type="text"
          :placeholder="$t('contact.placeholderName')"
          autocomplete="new-password"
          required
        >
        <BaseGradientLine class="mt-1 mb-8 h-[0.1rem]" />

        <label class="mb-1 font-bold" for="name">{{ $t('contact.labelContact') }}</label>
        <textarea
          id="contact"
          name="contact"
          type="text"
          :placeholder="$t('contact.placeholderContact')"
          autocomplete="off"
          required
        />
        <BaseGradientLine class="mt-1 mb-8 h-[0.1rem]" />

        <label class="mb-1 font-bold" for="name">{{ $t('contact.labelSubject') }}</label>
        <input
          id="subject"
          name="subject"
          type="text"
          :placeholder="$t('contact.placeholderSubject')"
          autocomplete="off"
          required
        >
        <BaseGradientLine class="mt-1 mb-8 h-[0.1rem]" />

        <label class="mb-1 font-bold" for="message">{{ $t('contact.labelMessage') }}</label>
        <textarea
          id="message"
          name="message"
          type="text"
          :placeholder="$t('contact.placeholderMessage')"
          autocomplete="off"
          rows="7"
          required
        />
        <BaseGradientLine class="mt-1 mb-8 h-[0.1rem]" />
        <button class="custom-btn w-fit ml-auto px-5" type="submit">
          {{ $t('contact.buttonSubmit') }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
<style scoped>
.hide-label {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
}

button {
  @apply rounded-xl bg-blue-600;
  transition: box-shadow 0.25s, scale 0.25s;
}

button:hover {
  scale: 105%;
  box-shadow: 0 0 15px 7px var(--glow-inner-color-faint), 0 0 25px 15px var(--glow-middle-color-faint), 0 0 35px 22px var(--glow-outer-color-faint);
}

input,
input:focus,
textarea,
textarea:focus {
  border: none;
  background-color: transparent;
  outline: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  color: black !important;
  -webkit-text-fill-color: white !important;
  -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}

</style>
