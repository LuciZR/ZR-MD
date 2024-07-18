FROM quay.io/lucizr/zr:main
RUN git clone https://github.com/LuciZR/ZR-MD /root/zr/
WORKDIR /root/zr/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
