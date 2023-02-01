<script lang="ts">
    export let to: string;
    export let ref: string = "noreferrer";
</script>

<a href={to} target="_blank" rel={ref}><slot></slot></a>
