# Publication copy notes

## Changes limited to this copy

- Omitted RuleFit and Pruned RuleFit artifacts, dedicated pages/styles, homepage sections and navigation/routes.
- Kept the homepage model-list anchor attached to the first available model section.
- Removed the original Google Maps API key from Contact.js and used a key-free map embed URL. Live map availability has not been verified.
- Copied only used assets, source files, package manifests and public resources. Omitted dependency installations, IDE files, caches, old Git metadata, unused default components/tests and research handoff folders.
- Added documentation, observed backend dependency versions, model hashes and Git LFS configuration. The original backend Python files and model bytes are unchanged.

## Existing limitations

- This packaging operation did not validate live inference or a clean dependency installation. Models carry scikit-learn 1.6.1 metadata, while the observed environment contains 1.7.0; the XGBoost JSON records 2.0.3 while the installed package is 3.0.2. Compatibility needs runtime verification.
- Numeric clinical ranges are placeholder guidance, not enforced min/max validation. The API performs basic input checks only.
- Results are binary risk labels, without confidence intervals or a general explanation layer.
- The model dictionary is populated at startup; there is no model version management, hot reload or administrative API.
- The frontend uses hardcoded local API URLs. Flask starts with debug enabled, a placeholder SECRET_KEY and broad CORS. This is a local development package, not a production deployment configuration.
- Contact.js sends `email`, but `/send_email` expects `user_email` and `recipient`. SMTP settings also need real shell environment values. The contact form is not ready for end-to-end use in the unchanged backend.
- The legacy Flask `/about` route references a missing `about.html`; its layout references missing `static/styles.css`. These are pre-existing legacy-page gaps and do not supply the React interface.
- The original default React test referenced a removed “learn react” link and was not included. No project-specific automated test suite is claimed.
- Original screenshots may show navigation items absent from the publication copy.

See verification.md for checks actually performed on this package.
