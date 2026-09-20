Screenshots and the portrait. Captured at fixed viewports, nothing retouched.

`og-*.jpg` are read by the Open Graph routes at build time with `readFile`,
not imported. A search for `@/assets/` will not find them, so do not treat
them as unused.
