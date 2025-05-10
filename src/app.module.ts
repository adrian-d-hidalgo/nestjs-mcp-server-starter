import { Module } from '@nestjs/common';

import { CoreModule } from './core/core.module';
import { DocumentationModule } from './documentation/documentation.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [CoreModule, HealthModule, DocumentationModule],
})
export class AppModule {}
