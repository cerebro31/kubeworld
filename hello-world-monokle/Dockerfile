FROM nginx
COPY . /usr/share/nginx/html
RUN apt-get update && \
apt-get install -y openssh-server
CMD ["/usr/sbin/sshd","-D"]
