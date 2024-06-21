<script setup>
import { ref } from 'vue';

const audio = ref('');
const q = ref('');
const test_id = ref('');
const part = ref('');
const image_one = ref('')
const image_two = ref('')

const handleFileChange = async (event) => {
  const file = event.target.files[0]; 


  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = async () => {
    // Update the profile with the new avatar
    console.log(reader.result);
    
   audio.value = reader.result
  };
  reader.readAsDataURL(file);

};



const imageOneHandle = async (event) => {
  const file = event.target.files[0]; 


  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = async () => {
    // Update the profile with the new avatar
    console.log(reader.result);
    
   image_one.value = reader.result
  };
  reader.readAsDataURL(file);

};


const imageTwoHandle = async (event) => {
  const file = event.target.files[0]; 


  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = async () => {
    // Update the profile with the new avatar
    console.log(reader.result);
    
   image_two.value = reader.result
  };
  reader.readAsDataURL(file);

};

async function sendData() {

  let info = JSON.stringify({
    q: q.value, 
    audio: audio.value, 
    part: part.value, 
    test_id: test_id.value, 
    image1: image_one.value, 
    image2: image_two.value
  })

  const res = await fetch('/api/speaking', {
    method: 'POST',
    body: info
  })

  const data = await res.json()
  console.log(data)
  window.location.reload()
}


</script>

<template>

        <!-- Card Section -->
<div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Card -->
  <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
    <form  @submit.prevent="sendData">
 

      <!-- Section -->
      <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
        <div class="sm:col-span-12">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Profile
          </h2>
        </div>
        <!-- End Col -->

        <div class="sm:col-span-3">
          <label for="af-submit-application-resume-cv" class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
            Audio Fayl
          </label>
        </div>
        <!-- End Col -->

        <div class="sm:col-span-9">
          <label for="file" class="sr-only">Fayl tanlash</label>
          <input  @change="handleFileChange" type="file" name="file" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
            file:bg-gray-50 file:border-0
            file:bg-gray-100 file:me-4
            file:py-2 file:px-4
            dark:file:bg-neutral-700 dark:file:text-neutral-400" required>
        </div>
        <!-- End Col -->

        <div class="sm:col-span-3">
          <label for="af-submit-application-resume-cv" class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
            Rasm 1 (Part 2)
          </label>
        </div>
        <!-- End Col -->

        <div class="sm:col-span-9">
          <label for="file" class="sr-only">Fayl tanlash</label>
          <input  @change="imageOneHandle" type="file" name="file" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
            file:bg-gray-50 file:border-0
            file:bg-gray-100 file:me-4
            file:py-2 file:px-4
            dark:file:bg-neutral-700 dark:file:text-neutral-400">
        </div>
        <!-- End Col -->


        <div class="sm:col-span-3">
          <label for="af-submit-application-resume-cv" class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
            Rasm 2 (Part 2)
          </label>
        </div>
        <!-- End Col -->

        <div class="sm:col-span-9">
          <label for="file" class="sr-only">Fayl tanlash</label>
          <input  @change="imageTwoHandle" type="file" name="file" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
            file:bg-gray-50 file:border-0
            file:bg-gray-100 file:me-4
            file:py-2 file:px-4
            dark:file:bg-neutral-700 dark:file:text-neutral-400">
        </div>
        <!-- End Col -->

        <div class="sm:col-span-3">
          <div class="inline-block">
            <label for="q" class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
              Savol
            </label>
          </div>
        </div>
        <!-- End Col -->

        <div class="sm:col-span-9">
          <textarea name="q" v-model="q" id="q" class="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm outline-none" rows="6" placeholder="Speaking savolini kiriting..." required></textarea>
        </div>
        
        <!-- End Col -->

        <div class="sm:col-span-3"><div class="inline-block"><label for="part" class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"> Part raqami </label></div></div>
        <div class="sm:col-span-9">
          <input id="part" v-model="part" type="text" name="part" class="py-2 px-3 pe-11 block w-full border border-gray-200 outline-none shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Part" required>
        </div>


        <div class="sm:col-span-3"><div class="inline-block"><label for="test_id" class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"> Test_id raqami </label></div></div>
        <div class="sm:col-span-9">
          <input id="test_id" v-model="test_id" type="text"  name="test_id" class="py-2 px-3 pe-11 block w-full border border-gray-200 outline-none shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Test id raqami" required>
        </div>


      </div>
      <!-- End Section -->
      

      
        <!-- End Col -->
      

      <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
        Yuborish
      </button>
    </form>
  </div>
  <!-- End Card -->
</div>
<!-- End Card Section -->

    
</template>