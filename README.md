# Diabetic Retinopathy Prediction Web Application

A Flask and React application that accepts routine clinical measurements and displays diabetic-retinopathy risk classifications. Developed by Yingfan Xu in the Oklahoma State University Industrial Engineering and Management research context shown in the application.

This release includes **Elaborative XGBoost** (8 inputs) and **Two-level Ensemble** (25 inputs, with its paired scaler). RuleFit and Pruned RuleFit are not distributed or available through this release's interface.

## Architecture

The React model pages share `PredictionForm`. It retrieves ordered feature names from Flask, creates numeric and categorical fields, and posts an ordered numeric array for inference. Flask discovers artifacts under `backend/models/` at startup. The ensemble wrapper applies its paired scaler before prediction. The response is a binary classification displayed as a high- or low-risk message.

```text
backend/       Flask API, legacy Jinja templates, model artifacts
frontend/      React pages, shared components and used visual assets
docs/          Model manifest and release notes
```

## Run locally

Install Python 3.13 and Node.js with npm. The Python requirements record versions observed in the source environment; clean-environment reproduction has not yet been verified. See [known limitations](docs/release-notes.md).

If cloning from GitHub, install Git LFS and run `git lfs pull` from the repository root before starting the backend. Verify the artifacts using [the manifest](docs/model-artifacts.json).

Backend, from a PowerShell terminal in the repository root:

```powershell
cd backend
py -3.13 -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe app.py
```

Keep this terminal open. Start the frontend in a second PowerShell terminal, again from the repository root:

```powershell
cd frontend
npm ci
npm start
```

Open http://localhost:3000. The frontend currently calls http://127.0.0.1:5000. Start Flask from `backend/` because the source code uses a relative model path. SMTP configuration is optional for prediction; the contact form's existing API mismatch is documented in the release notes.

## API

| Endpoint | Purpose |
| --- | --- |
| `GET /models` | Names of models successfully loaded at startup |
| `GET /get_features?model_name=Elaborative%20XGBoost` | Ordered feature names |
| `POST /predict` | Predict from `model` and ordered numeric `features` |
| `POST /send_email` | Existing SMTP endpoint; see limitations before use |

Synthetic request example, not a clinical reference case:

```json
{"model":"Elaborative XGBoost","features":[7.2,1.0,130,14,4.0,50,0,0]}
```

The prediction response is `{"prediction": 0}` or `{"prediction": 1}`. It does not contain a probability, confidence interval or patient-specific explanation.

## Scope and attribution

This repository contains the web application and pretrained inference artifacts, not a complete training dataset or reproducible training pipeline. Research demonstration only; predictive performance and suitability for clinical use are not established by this repository.

Existing researcher credits and institutional/third-party imagery are retained from the source application. No new blanket license is granted over model artifacts, portraits or third-party assets. See [attribution notes](docs/attribution.md).

The public repository is [TerrificXu/diabetic-retinopathy-web](https://github.com/TerrificXu/diabetic-retinopathy-web). The ensemble artifact is stored in Git LFS. For publishing a separate copy, see [GitHub upload instructions](docs/upload-to-github.md).
