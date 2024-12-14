<script>
	// Lógica opcional
  </script>
  
  <div class="flex flex-col items-center mt-10">
	<div class="relative w-24 h-60 bg-gray-300 overflow-hidden">
	  <!-- Corrente 1 (animação contínua) -->
	  <!-- <div class="absolute bottom-0 w-full bg-amber-500 animate-current"></div> -->
	  
	  <!-- Corrente 2 (animação contínua) -->
	  <div class="absolute bottom-0 w-full bg-amber-500 animate-current" style="animation-duration: 4s;"></div>
	</div>
  </div>
  
  <style>
	@keyframes current-flow {
	  0% {
		transform: translateY(100%);
	  }
	  100% {
		transform: translateY(-100%);
	  }
	}
  
	.animate-current {
	  animation: current-flow 200ms linear infinite;
	  position: absolute;
	  bottom: 0;
	  width: 100%;
	  height: 100%;
	}
  </style>
  