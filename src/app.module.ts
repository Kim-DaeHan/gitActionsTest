import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TestModule } from "./test/test.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://192.168.0.2:27017/"),
    TestModule,
    UserModule,
  ],
})
export class AppModule {
  constructor() {
    const mongodbUri = "mongodb://192.168.0.2:27017/ 2222";
    console.log(`Connected to MongoDB at: ${mongodbUri}`);
    // 여기에서 mongodbUri를 사용하여 MongoDB에 연결하는 로직을 구현할 수 있습니다.
  }
}
