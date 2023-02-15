This repository has two use-case covered:

1. hello-world-monokle : A getting started application to welcome you to Monokle.
2. nginx-mariadb : Advanced level application to help you leverage power of Monokle towards error-free deployments

Let's dig deeper with each:

# Use case 1 : Monokle-helloworld
A simple nginx application to welcome you to Monokle.

## Steps on how to build your image and get started with kubernetes

### Prerequisite : 

- Install docker using this [link](https://docs.docker.com/engine/install/)

### Steps :

My personal favorite distro is Ubuntu and i prefer repository installation to
keep things fresh. So i have used [this](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) method.
Once docker is up and running, run following commands.

- Clone this repository.

```
cd ./hello-world-monokle
docker login -u "dockerhub-username"
docker build -t "image-name:tag" .
docker push "image-name:tag"
```

Check the image from your dockerhub account.

For learning purpose, you can make use of this image available on dockerhub: cerebro31/monokle-helloworld:latest

For further steps on how to get started with Kubernetes, head over to blogpost.

### How output looks after deployment:

```
kustomize-helm-monokle$ kubectl get services | grep helloworld
helloworld   LoadBalancer   10.111.30.165    10.111.30.165   80:32078/TCP   2m22s
```
Tip: Make sure you have `minikube tunnel` running in background.

### Verify using service IP 

```
kustomize-helm-monokle$ curl http://10.111.30.165
<!DOCTYPE html>

<html>
	<head>
		<title>
			Get started with Kubernetes
		</title>
	</head>

	<body>
		<center>
			<h1>Hello World from Monokle!</h1>
		</center>
	</body>
</html>
```

Hurray!!

# Use case 2 : kustomize-helm-monokle
A simple Nginx-Mariadb application with kustomize-helm. We
have used Bitnami Helm Chart.

## How to get started
1. Install Monokle.
2. Start Monokle and Select "Clone a Git repo"
3. Click on "View Kustomizations" to view overlays and click on deploy.
Please create dev and prod namespace for respective overlays.
4. Click on "View Helm Charts" to view charts and click on deploy.

Tips for setup: 
1. You need to run "helm dependency build" in mariadb directory
2. Install and start minikube if you want to run application on local cluster.

Some CLI based help and commands:

### Helm dry run
```
helm install --dry-run --debug mariadb
```

### kustomizations dev
```
kubectl create namespace dev
kustomize build overlay/dev | kubectl -n dev apply -f -
```

### kustomizations prod
```
kubectl create namespace prod
kustomize build overlay/prod | kubectl -n prod apply -f -
```
