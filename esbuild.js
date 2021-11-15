import esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/embed-pivot.ts'],
    bundle: true,
    outfile: 'lib/embed-pivot.js',
  })
  .catch(() => process.exit(1));
