import { Controller, Get, Header } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('character')
export class CharacterController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('random')
  @Header('Access-Control-Allow-Origin', '*')
  async random() {
    const ids = await this.prismaService.character.findMany({ select: { id: true } });
    const randomId = ids[Math.floor(Math.random() * ids.length)].id;

    return await this.prismaService.character.findFirst({ where: { id: randomId } });
  }
}
