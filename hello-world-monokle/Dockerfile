FROM ubuntu
RUN apt update && apt install nginx curl openssh-server -y
COPY ./entrypoint.sh .
COPY index.html /var/www/html
EXPOSE 22 80
ENTRYPOINT ["./entrypoint.sh"]
