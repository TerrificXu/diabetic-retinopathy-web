# Packaging verification

- Python source parsed with ast without importing or executing the application.
- All included JSON files parsed successfully.
- Exactly three model artifacts included: XGBoost, ensemble and paired scaler.
- Artifact copies checked using SHA-256; hashes are in model-artifacts.json.
- Excluded dependency directories, IDE files, caches, research handoff folders and existing Git metadata.
- No original Google Maps API-key pattern remains in included text files.
- No RuleFit or Pruned RuleFit routes remain in included JavaScript.
- Original source and resource SHA-256 inventories matched before and after packaging (installed dependency directories, caches and Git internals were excluded from this inventory).
- Only four copied files changed: App.js, Header.js, Home.js and Contact.js. Other copied files retain their source bytes.

Live inference, SMTP delivery, map availability and clean-environment installation have not been tested. All 13 included JavaScript files passed JSX parsing and static relative-import resolution using Babel. Dynamic team portraits and icon files were checked for existence. Git attribute matching confirmed the ensemble file uses LFS. A production frontend build has not been run.
