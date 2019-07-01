gcloud beta container clusters create stanford-codex-techindex \
--addons=HorizontalPodAutoscaling,HttpLoadBalancing,Istio,CloudRun \
--machine-type=n1-standard-2 \
--cluster-version=latest --zone=us-central1-a \
--enable-stackdriver-kubernetes --enable-ip-alias \
--scopes cloud-platform