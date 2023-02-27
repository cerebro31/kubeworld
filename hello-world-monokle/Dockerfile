FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN apt-get install openssh-server
CMD ["/usr/sbin/sshd","-D"]
