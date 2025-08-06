import { StaticPagesService } from './static-pages.service';
import { CreateStaticPageDto } from './dto/create-static-page.dto';
import { UpdateStaticPageDto } from './dto/update-static-page.dto';
import { StaticPageResponseDto } from './dto/static-page-response.dto';
export declare class StaticPagesController {
    private readonly staticPagesService;
    constructor(staticPagesService: StaticPagesService);
    createStaticPage(createStaticPageDto: CreateStaticPageDto): Promise<StaticPageResponseDto>;
    getAllStaticPages(): Promise<StaticPageResponseDto[]>;
    getStaticPageById(id: string): Promise<StaticPageResponseDto>;
    getStaticPageBySlug(slug: string): Promise<StaticPageResponseDto>;
    updateStaticPage(id: string, updateStaticPageDto: UpdateStaticPageDto): Promise<StaticPageResponseDto>;
    deleteStaticPage(id: string): Promise<{
        message: string;
    }>;
}
